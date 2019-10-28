# Bot-Framework

This is a framework make you create chatbot more easily.

* #### Flexible
* #### Intelligent
* #### Multifunction

## Requirements
The framework highly depends on async function syntax, the use of sql and ssl server, so you must make sure your runtime meets the following requirements:
* [Node.js](https://nodejs.org/en/) version is at least 7.6.0
* sql software (e.g. [XAMPP](https://www.apachefriends.org/zh_tw/index.html))
* ssl server like [ngrok](https://ngrok.com/) or [heroku](https://www.heroku.com/)

## Installing Bot Framework

To start using it, install `sm-bot-framework` globally from the npm registry:

`npm install -g sm-bot-framework`

Or install it by yarn:

`yarn global add sm-bot-framework`

## Community

You can discuss anything about sm-bot-framework or chatbot development in our [Discord Server](https://discord.gg/dSXSemU). Join now!

## Documentation

You can find the framework documentation on the website.

* Getting Started
  * base
  * plugin
* Platforms
  * Messenger
  * LINE
* Guides
  * ssl server
* API Reference

## Examples

```javascript

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
```

## Contributing
Pull Requests and issue reports are welcome. You can follow steps below to submit your pull requests:

Fork, then clone the repo:

```
git clone git@github.com:your-username/sm-bot-framework.git
```
Install the dependencies:

```
cd sm-bot-framework
yarn
```
Make sure the tests pass (including eslint, flow checks and jest tests):

```
yarn test
```
Make your changes and tests, and make sure the tests pass.
