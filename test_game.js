/* 
 * test_bot.js
 */

// jQuery
const 
	jsdom = require("jsdom"),
	{ JSDOM } = jsdom,
	{ window } = new JSDOM(`<!DOCTYPE html>`),
	$ = require('jQuery')(window);

// bot settings
const
	plugin = require('./plugin_manager'),
	connection_manager = require('./connection_manager.js'),
	server = connection_manager.server,
	
	// listen port 8080
	bot = new connection_manager(8080),
	command_list = "抽卡\n提醒\n天氣=<地點>";

server.post('/', async function(req, res, next){
	// line webhook verify
	bot.lineVerify(req, res);
	
	// judge the platform by received message
	platform = bot.getPlatform(req);
	received_message = bot.getReceivedMessage(req);
	
	// receiving webhook event
	bot.connect(platform, req, res);
	
	if(typeof received_message !== 'undefined'){
		if(received_message === 'help'){
			reply = await bot.messageHandler(platform, "<可用指令>\n"+command_list);
		} else if(received_message === '抽卡'){
			reply = await bot.messageHandler(platform, plugin.run('plugin_game', 10));
		} else {
			NLP_reply = await plugin.run('plugin_reply', received_message);
			reply = bot.messageHandler(platform, NLP_reply);
		}
	}
	
	// transform the json format and send
	bot.sendAPI(platform, 'reply', req, reply);
});

server.get('/', async function(req, res, next){
	// fb page subscribe event
	bot.fbSubscribe(req, res);
});