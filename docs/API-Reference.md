# <a name="api-reference"></a>JavaScript Raw APIs
Support FB and LINE platforms.<br>
<b>Remember to set your key in the file ``key_config.ini``.</b>
* [Bot Basic APIs]()
* [Plugin-Manager APIs]()
* [Official Plugin APIs]()
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
* ``res`` Object - The http response (The argument ``res`` below are all the same)

Returns ``undefined`` - It will print the success message of verifying LINE webhook

### lineCon(req, res)
Returns ``undefined`` - Verify LINE webhook event

### fbSubscribe(req, res)
Returns ``undefined`` - Handle fb page subscribe event(GET), send ``200`` or ``403``
***
## Plugin-Manager APIs
***
## Official Plugin APIs

<b>[BACK](https://github.com/Mist-Rain/Bot-Framework#documentation)</b>
