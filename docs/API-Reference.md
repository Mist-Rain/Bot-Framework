# <a name="api-reference"></a>JavaScript Raw APIs
Support FB and LINE platforms.<br>
<b>Remember to set your key in the file ``key_config.ini``.</b>
* [Bot Basic APIs](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#bot-basic-apis)
* [Plugin-Manager APIs](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#plugin-manager-apis)
* [Official Plugin APIs](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#official-plugin-apis)
***
## Bot Basic APIs
Provide the basic function of creating a chat bot.
Use them with ``require('./base.js')``
### server
The express server
```javascript
const
	base = require('./base.js'),
	server = base.server,
	
	// listen port 8080
	bot = new base(8080);
  
server.post('/', (req, res, next) => {
  // do something
});

server.get('/', (req, res, next) => {
  // do something
});
```
### getPlatform(req)
Get the platform by received messages(not webhook verifing event).
* ``req`` Object - The http request

Returns ``String`` - The platform is either ``line`` or ``fb``.
```Javascript
const
	base = require('./base.js'),
	server = base.server,
	
	// listen port 8080
	bot = new base(8080);

server.post('/', (req, res, next) => {
	// line webhook verify
	bot.lineVerify(req, res);
	
	let platform = bot.getPlatform(req);
	console.log(platform);
	
	// receiving webhook event
	bot.connect(platform, req, res);
});

server.get('/', (req, res, next) => {
	// fb subscribe event
	bot.fbSubscribe(req, res);
});
```
### getReceivedMessage(req)
* ``req`` Object - The http request (The argument ``req`` below are all the same)

Returns ``String`` - The received message

### getUserId(req)
Returns ``String`` - The user's id.

### getPayload(req)
Returns ``String`` - payloads like button event's payload

### lineVerify(req, res)
It will print the success message of verifying LINE webhook.
* ``res`` Object - The http response (The argument ``res`` below are all the same)

Returns ``undefined``

### lineCon(req, res)
Verify LINE webhook event, send ``200`` or ``403``.

Returns ``undefined``

### fbSubscribe(req, res)
Handle fb page subscribe event(GET), send ``200`` or ``403``.

Returns ``undefined``

### fbCon(req, res)
Verify FB webhook event, send ``200`` or ``404``.
 
Returns ``undefined``

### connect(platform, req, res)
Apply to judge the message source when crossing platform happen.

* ``platform`` String - the platform of message source

Returns ``undefined``

### sendAPI(platform, event, req, message)
You can combine this API with ``getPlatform(req)`` if you don't know the platform of messages.
* ``platform`` String - the platform that you want to send
* ``event`` String - decide to push or reply
* ``message`` String - the message that you want to send, it should be handled by ``messageHandler``

Returns ``undefined``

### lineSendAPI(event, req, message)
* ``event`` String - decide to push or reply
* ``message`` String - the message that you want to send, it should be handled by ``messageHandler`` first

Returns ``undefined``

### fbSendAPI(event, req, message)
* ``event`` String - decide to push or reply
* ``message`` String - the message that you want to send, it should be handled by ``messageHandler`` first

Returns ``undefined``

### messageHandler(platform, message)
Transform the message into the JSON format to fit the rule of the platform.
* ``platform`` String - the platform of message that you want to transform
* ``message`` String

Returns ``Object`` - JSON

[TOP](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#javascript-raw-apis)
***
## Plugin-Manager APIs

### run(class_name, ...args)
Run the plugin with a number of arguments.
* ``class_name`` String - the plugin name that you want to use
* ``...args`` - the argument what the plugin need, you can be referred to the API below.

[TOP](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#javascript-raw-apis)
***
# Official Plugin APIs
We provide some plugins to make it easier for the developers to create their chatbots and to increase the diversity of the functions.
[Devlopers plugin](https://github.com/Mist-Rain/Bot-Framework/tree/master/docs/Plugins)

[TOP](https://github.com/Mist-Rain/Bot-Framework/blob/master/docs/API-Reference.md#javascript-raw-apis)

<b>[BACK](https://github.com/Mist-Rain/Bot-Framework#documentation)</b>
