# Plugins

You can write your own plugins or use others to extend your bot.

## How to use

Take plugin_game for example:

```javascript
/*
 * test plugin_game
 * gacha game
 */
 
const plugin = require("./plugin_manager.js");

let gacha_result = plugin.run('plugin_game', 10);
console.log(gacha_result);
```
