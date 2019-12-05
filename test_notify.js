/* 
 * test_bot.js
 */
 
//bot settings
const
	plugin = require('./plugin_manager'),
	connection_manager = require('./connection_manager.js'),
	server = connection_manager.server,
	
	// listen port 8080
	bot = new connection_manager(8080);

server.post('/', async function(req, res, next){
	// line webhook verify
	bot.lineVerify(req, res);
	
	// judge the platform by received message
	platform = bot.getPlatform(req);
	received_message = bot.getReceivedMessage(req);
	
	// receiving webhook event
	bot.connect(platform, req, res);
	
	if(received_message === '抽卡'){
		next();
	} else {
		reply = await bot.messageHandler(platform, received_message);
		// transform the json format and send
		bot.sendAPI(platform, 'reply', req, reply);
	}
});

server.post('/', async function(req, res, next){
	if(received_message === '抽卡'){
		var schedule = require("node-schedule");
		var date = new Date(Date.now()+5000);
		var j = schedule.scheduleJob(date,async function(){
			reply = await bot.messageHandler(platform, await plugin.run('plugin_game', 10));
			bot.sendAPI(platform, 'reply', req, reply);
		});
	}
});

server.get('/', async function(req, res, next){
	// fb page subscribe event
	bot.fbSubscribe(req, res);
});