# Plugins

You can write your own plugins or use others to extend your bot.

## How to Use

First, extend this class and put the function you want to execute into the ``run`` function.

```javascript
class plugin_format{
 run(){
 };
};

module.exports = plugin_format;
```

Take the ``plugin_game.js`` that we made for example:

```javascript
/*
 *	plugin_game.js
 *	gacha: Gacha game.
 */
const plugin_format = require('../plugin_format.js');

class plugin_game extends plugin_format {
	run(...args){
		let result = this.gacha(arguments[0]);
		return result;
	}
	
	gacha(time){
		// gacha settings
		const
			gacha_list = ["★", "★★", "★★★", "★★★★", "★★★★★"],
			gacha_weight = [50, 30, 10, 8, 2];
			
		let gacha_result = {
				'★': 0,
				'★★': 0,
				'★★★': 0,
				'★★★★': 0,
				'★★★★★': 0
			};
			
		// one time gacha function
		function gacha(gacha_list, gacha_weight){
			let totalweight = eval(gacha_weight.join("+"));
			let weighed_gacha = new Array();
			let current_gacha = 0;
			while (current_gacha < gacha_list.length) {
				for (let i = 0; i < gacha_weight[current_gacha]; i++) {
					weighed_gacha.push(gacha_list[current_gacha]);
				}
				current_gacha++;
			}
			let random_number = Math.floor(Math.random() * totalweight)
			return weighed_gacha[random_number];
		}

		// store the result in the object gacha_result
		for(let count = 0; count < time; count++){
			let result = gacha(gacha_list, gacha_weight);
			switch(result){
				case '★':
					gacha_result['★']++;
					break;
				case '★★':
					gacha_result['★★']++;
					break;
				case '★★★':
					gacha_result['★★★']++;
					break;
				case '★★★★':
					gacha_result['★★★★']++;
					break;
				case '★★★★★':
					gacha_result['★★★★★']++;
					break;
			}
		}
		let result = '';
		for(let count = 0; count<Object.keys(gacha_result).length; count++){
			if(count === 0 && Object.values(gacha_result)[count]!==0){
				result = Object.keys(gacha_result)[count].concat('*').concat(Object.values(gacha_result)[count]).concat(result);
			}
			else if(count !== 0 && Object.values(gacha_result)[count]!==0){
				result = Object.keys(gacha_result)[count].concat('*').concat(Object.values(gacha_result)[count]).concat('\n').concat(result);
			}
		}
		return result;
	}
}

module.exports =  new plugin_game();
```

## Easy to Use
Plugin game demo.

```javascript
/*
 * test_game.js
 * test the gacha game
 */
 
const plugin = require("./plugin_manager.js");

let gacha_result = plugin.run('plugin_game', 10);
console.log(gacha_result);
```
Just put one argument if the number of function in the plugin is only one.

## Used in LINE Chatbot

```javascript
/* 
 * test_bot.js
 */
 
//bot settings
const
	plugin = require('./plugin_manager'),
	base = require('./base.js'),
	server = base.server,
	
	// listen port 8080
	bot = new base(8080);
	
// reply
let reply = undefined;

server.post('/', async function(req, res, next){
	// line webhook verify
	bot.lineVerify(req, res);
	
	// judge the platform by received message
	let platform = bot.getPlatform(req);
	let received_message = bot.getReceivedMessage(req);
	
	// receiving webhook event
	bot.connect(platform, req, res);
	
	// transform the json format and send
	if(received_message === "gacha"){
		reply = await bot.messageHandler(platform, plugin.run('plugin_game', 10));
	} else {
		reply = await bot.messageHandler(platform, received_message);
	}
	bot.sendAPI(platform, 'reply', req, reply);
});
```

For more information, you can read the [API document](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#API_reference).

<b>[BACK](https://github.com/Mist-Rain/Bot-Framework#documentation)</b>
