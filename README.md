# Smart Multifunction Bot Framework

This is a framework make you create chatbot more easily.

<b>Support FB and LINE platform.</b>

* #### Flexible - Build your own plugin and use it at any time
* #### Intelligent - Use NLP to perform situational conversation
* #### Modern - Source written with ES6/ES7 syntax and great async await supports.
* #### Multifunction - Use multiple plugins at the same time

## Requirements
The framework highly depends on async function syntax, the use of sql and ssl server, so you must make sure your runtime meets the following requirements:
* [Node.js](https://nodejs.org/en/) version is at least 7.6.0
* sql software (e.g. [XAMPP](https://www.apachefriends.org/zh_tw/index.html))
* ssl server like [ngrok](https://ngrok.com/) or [heroku](https://www.heroku.com/)

## Community

You can discuss anything about sm-bot-framework or chatbot development in our [Discord Server](https://discord.gg/Gjaamg). Join now!

## <a name="documentation"></a>Documentation

You can find the framework documentation on the website.

* [Getting Started](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/Getting-Started.md#getting_started)
* [Plugins](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/Plugins.md)
* Platforms
  * [Messenger](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/Platforms/Messenger.md#Messenger)
  * [LINE](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/Platforms/LINE.md#LINE)
* [API Reference](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md)

## Examples

```javascript
// Bot.js
// bot settings
const
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
Build the script under the main folder, remember to set your key in the file key_config.ini and run js file with the command ``node <filename>.js``.
## Contributing
Pull Requests and issue reports are welcome. You can follow steps below to submit your pull requests:

Fork, then clone the repo:

git clone git@github.com:your-username/sm-bot-framework.git
Install the dependencies:
``
cd sm-bot-framework
yarn
``
Make sure the tests pass (including eslint, flow checks and jest tests):
``
yarn test
``
Make your changes and tests, and make sure the tests pass.
