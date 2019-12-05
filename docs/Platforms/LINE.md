# <a name="line"></a>LINE
Replying, sending and JSON transformed APIs.

## lineAPI
### reply(req, message, line_channel_access_token)
Reply message passively.

When the bot receive messages, call this API to reply.
* ``req`` Object - http request
* ``message`` String - it should be handled by ``messsageHandler`` first
* ``line_channel_access_token`` String - the secret key of the line webhook event validation

Returns ``undefined``

### push(user_id, message, line_channel_access_token)
Initiate a sending message.

* ``user_id`` Object - http request
* ``message`` String - it should be handled by ``messsageHandler`` first
* ``line_channel_access_token`` String - the secret key of the line webhook event validation

## lineMessageHandler
### textMessage(text)
* ``text`` String - pre-handled text message
Returns
``
[{
  "type": "text",
	"text": text
}]
``

<b>[BACK](https://github.com/Mist-Rain/Bot-Framework#documentation)</b>
