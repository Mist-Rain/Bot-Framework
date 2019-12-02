// crossPlatform.js

// bot settings
const
	base = require('./base.js'),
	server = base.server,
	
	// listen port 8080
	bot = new base(8080);

server.post('/', async function(req, res, next){
	// line webhook verify
	bot.lineVerify(req, res);
	
	// judge the platform by received message
	let platform = bot.getPlatform(req);
	let received_message = bot.getReceivedMessage(req);
	
	// receiving webhook event
	bot.connect(platform, req, res);
	
	// transform the json format and send
	reply = await bot.messageHandler(platform, received_message);
	bot.sendAPI(platform, 'reply', req, reply);
});

server.get('/', function(req, res, next){
	bot.fbSubscribe(req, res);
});