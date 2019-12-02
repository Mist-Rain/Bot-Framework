# Getting started

[Node.js](https://nodejs.org/en/) version is at least 7.6.0

## Get a SSL URL
Use reverse proxy service like [ngrok](https://dashboard.ngrok.com/get-started).

## Create Messaging API Channel(for LINE)
[LINE Developer](https://developers.line.biz/console/register/messaging-api/provider/)

## Add an Application(for FB)
[FB Developer](https://developers.facebook.com/)

### Precautions
Remember to set the Webhook URL with the SSL URL you just got.

* LINE

![image](https://i.imgur.com/TZEIAN3.jpg)

* FB

![image](https://i.imgur.com/kpv5ay3.jpg)

Notice that the server listening route should be add after the Webhook URL(e.g. ``server.post('/callback', ...)`` with ``https:OOOOOOOO.ngrok.io/callback``).

## Set secret key in the file ``key_config.ini``

In LINE platform, you will need the ``channel_secret`` and the ``channel_access_token``.

In FB platform, you will need the ``page_access_token``.

## Example

Simple example of echo bot receiving line and fb webhook event
```javascript
// crossPlatform.js

// bot settings
const
	// plugin use require
	plugin = require('./plugin_manager.js'),
	
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
```
