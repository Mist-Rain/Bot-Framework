/* 
 * test_bot.js
 */

// child_process for calling python script
const { exec } = require('child_process');

// bot settings
const
	plugin = require('./plugin_manager'),
	connection_manager = require('./connection_manager.js'),
	server = connection_manager.server,
	
	// listen port 8080
	bot = new connection_manager(8080),
	command_list = "抽*<次數> (抽卡)\n天氣=<地點>";

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
			reply = await bot.messageHandler(platform, "~可用指令~\n"+command_list);
			bot.sendAPI(platform, 'reply', req, reply);
		} else if(received_message.match(/^抽\*[1-9]+[0-9]*$/)){
			time = received_message.substring(2);
			reply = await bot.messageHandler(platform, plugin.run('plugin_game', parseInt(time, 10)));
			bot.sendAPI(platform, 'reply', req, reply);
		} else if(received_message.match(/^天氣=./)){
			location = received_message.substring(3);
			exec('python final_project.py '+location, async function (err, stdout, stderr) {
				reply = await bot.messageHandler(platform, stdout+"\n資料來源: www.weather.com");
				bot.sendAPI(platform, 'reply', req, reply);
			});	
		} else {
			NLP_reply = await plugin.run('plugin_reply', received_message);
			reply = await bot.messageHandler(platform, NLP_reply);
			bot.sendAPI(platform, 'reply', req, reply);
		}
	}
});

server.get('/', async function(req, res, next){
	// fb page subscribe event
	bot.fbSubscribe(req, res);
});