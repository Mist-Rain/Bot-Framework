/*	
 *	Bot.js
 *	Demo chat bot.
 */

// bot settings
const
	plugin = require('./plugin_manager.js'),
	base = require('./base.js'),
	server = base.server,
	bot = new base(8080);

// game
let gacha_time = undefined;
let gacha_result = undefined;

// reply
let reply = undefined;

server.post('/', async function(req, res, next){
	bot.lineVerify(req, res);
	
	let platform = bot.getPlatform(req);
	let received_message = bot.getReceivedMessage(req);
	let user_id = bot.getUserId(req);
	bot.connect(platform, req, res);
	
	reply = bot.messageHandler(platform);
	bot.sendAPI(platform, 'reply', req, reply);
});

server.get('/', function(req, res, next){
	bot.fbSubscribe(req, res);
});