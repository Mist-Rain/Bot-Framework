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
			if(result === '' && Object.values(gacha_result)[count]!==0){
				result = Object.keys(gacha_result)[count].concat('*').concat(Object.values(gacha_result)[count]).concat(result);
			}
			else if(result !== '' && Object.values(gacha_result)[count]!==0){
				result = Object.keys(gacha_result)[count].concat('*').concat(Object.values(gacha_result)[count]).concat('\n').concat(result);
			}
		}
		return result;
	}
}

module.exports =  new plugin_game();