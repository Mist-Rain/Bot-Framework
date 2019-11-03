/*	plugin_manager.js
 *	Manager plugin function.
 */

'use strict'
let fs = require('fs');

//插件路徑
let plugin_list = [];

//插件物件
let plugin_obj = [];

//插件名稱
let plugin_names = [];


//將引用插件的function由object轉成array
function toArray(obj){
	let arrayfunc = [];
	Object.keys(obj).map(function(key) {	
		if (arrayfunc instanceof Array) {
			//console.log("result is good");
			arrayfunc.push(obj[key]);
		}
	})
	return arrayfunc;
};

class plugin {
	// construct plugin
	constructor(){
		this.get_plugin();
		this.get_name();
		this.use_require();
	}
	//新增插件到plugin_list
	get_plugin() {
		const testFolder = './plugin/';
		fs.readdirSync(testFolder).forEach(file => {
			plugin_list.push(file);
		});
	}
	//取得物件陣列名稱放入plugin_names
	get_name(){
		//read();
		plugin_names.length = 0;
		for(var i = 0; i < plugin_list.length; i++){
			var last = plugin_list[i].search(".js");
			plugin_names.push(plugin_list[i].slice(0,last));
		}
	}
	//統一require所需要的插件放入plugin_obj
	use_require(){
		plugin_obj.length = 0;
		for(var i = 0; i < plugin_list.length; i++){
			if(plugin_list[i] !== ""){
				let path = './plugin/'+plugin_list[i];
				plugin_obj.push(require(path));
			}
		}
	}
    //使用者呼叫function的方法		
	run(class_name,...args){
		let array_class;
		let num = 0;
		//利用相同參數位置來比對兩個陣列藉此使用obj
		for(; num < plugin_names.length; num++){
			if(class_name === plugin_names[num])
				break;
		}
		array_class = plugin_obj[num];
		//console.log(arrayfunc);
		
			//console.log("USE is good");
			return array_class.run(...args);
		
	}
	//查看該插件所有方法
	/*list_func(name){
			let num = 0;
			for(; num < plugin_names.length; num++){
				if(name === plugin_names[num])
				break;
			}
			let arrayfunc = toArray(plugin_obj[num]);
			console.log(arrayfunc[num]);
	}*/
	//查看現在引用了甚麼插件
    /*list() {
		let array = [];
		array = plugin_list;
		console.log(array);
    }*/
};

module.exports = new plugin();