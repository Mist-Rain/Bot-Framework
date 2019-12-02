// linePackageReceive.js

// bot settings
const
	base = require('./base.js'),
	server = base.server,
	
	//listen port 8080
	bot = new base(8080);

server.post('/', async function(req, res, next){
	// line webhook verify
	bot.lineVerify(req, res);
	
	// judge the platform by received message
	let platform = bot.getPlatform(req);
	
	// line webhook event and validation
	bot.connect(platform, req, res);
});