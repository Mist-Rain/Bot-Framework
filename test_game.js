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
	command_list = "抽*<次數> (抽卡)\n天氣=<地點>\n妹子\ngi=<文字> (估狗搜圖)";

server.post('/', async function(req, res, next){
	// line webhook verify
	bot.lineVerify(req, res);
	
	// judge the platform by received message
	platform = bot.getPlatform(req);
	received_message = bot.getReceivedMessage(req);
	
	// receiving webhook event
	bot.connect(platform, req, res);
	
	if(typeof received_message !== 'undefined'){
		// help
		if(received_message.match(/^help$/i)){
			reply = await bot.messageHandler(platform, "~指令~\n"+command_list);
			bot.sendAPI(platform, 'reply', req, reply);
		// 抽卡
		} else if(received_message.match(/^抽\*[1-9]+[0-9]*$/)){
			time = parseInt(received_message.substring(2), 10);
			if(time<=1000000){
				reply = await bot.messageHandler(platform, plugin.run('plugin_game', time));
			} else {
				reply = await bot.messageHandler(platform, "太大啦！(上限100W)");
			}
			bot.sendAPI(platform, 'reply', req, reply);
		// 天氣
		} else if(received_message.match(/^天氣=./)){
			location = received_message.substring(3);
			exec('python weather_crawler.py '+location, async function (err, stdout, stderr) {
				reply = await bot.messageHandler(platform, stdout);
				bot.sendAPI(platform, 'reply', req, reply);
			});	
		// crawl ptt beauty
		} else if(received_message === '妹子'){
			exec('python beauty_crawler.py', async function (err, stdout, stderr) {
				reply = await bot.messageHandler(platform, stdout, 'image');
				bot.sendAPI(platform, 'reply', req, reply);
			});
		// google 圖片 gi = google image
		} else if(received_message.match(/^gi=./)){
			search = '\"'.concat(received_message.substring(3)).concat('\"');
			exec('python goo_image_crawler.py '+search, async function (err, stdout, stderr) {
				reply = await bot.messageHandler(platform, stdout, 'image');
				bot.sendAPI(platform, 'reply', req, reply);
			});	
		} else {
			/*NLP_reply = await plugin.run('plugin_reply', received_message);
			reply = await bot.messageHandler(platform, NLP_reply);
			bot.sendAPI(platform, 'reply', req, reply);*/
		}
	}
});

server.get('/', async function(req, res, next){
	// fb page subscribe event
	bot.fbSubscribe(req, res);
});