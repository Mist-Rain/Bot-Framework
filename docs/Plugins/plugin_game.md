# plugin_game

## gacha(time)
* ``time`` Integer - the time of gacha

Returns ``String`` - the result of gacha

```Javascript
// test gacha
const plugin = require("./plugin_manager.js");

let gacha_result = plugin.run('plugin_game', 10); //gacha 10 times
console.log(gacha_result); 
/* output may be 
★★★★*2
★★*3
★*5
*/
```

[Sourcecode](https://github.com/Mist-Rain/Bot-Framework/blob/master/plugin/plugin_game.js)
