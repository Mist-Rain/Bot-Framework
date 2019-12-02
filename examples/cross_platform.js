// cross_platform.js

// bot settings
const
	plugin = require('./plugin_manager.js'),
	base = require('./base.js'),
	server = base.server,
	bot = new base(8080);

server.post('/', async function(req, res, next){
	bot.lineVerify(req, res);

	let platform = bot.getPlatform(req);
	bot.connect(platform, req, res);

	reply = await bot.messageHandler(platform, 'Hello world!');
	bot.sendAPI(platform, 'reply', req, reply);
});

server.get('/', function(req, res, next){
	bot.fbSubscribe(req, res);
});