const plugin = require("./plugin_manager.js");

let gacha_result = plugin.run('plugin_game', 10);
console.log(gacha_result);

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let gachaResult = () => {
	return sleep(1000).then(console.log(plugin.run('plugin_game', 10)));
}

const gachaLoop = async _ => {
	console.log('Start');
	while(true){
		console.log();
		await gachaResult();
	}
}

//gachaResult();
//gachaLoop();