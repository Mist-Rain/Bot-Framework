# <a name="messenger"></a>Messenger
Replying, sending and JSON transformed APIs.

## fbAPI
### reply(req, message, fb_PAGE_ACCESS_TOKEN)
Reply message passively.

When the bot receive messages, call this API to reply.
* ``req`` Object - http request
* ``message`` String - it should be handled by ``messsageHandler`` first
* ``fb_PAGE_ACCESS_TOKEN`` String - the secret key of the fb page subscribe event

Returns ``undefined``

### push(receiver_psid, message, fb_PAGE_ACCESS_TOKEN)
Initiate a sending message.

* ``receiver_psid`` String
* ``message`` String - it should be handled by ``messsageHandler`` first
* ``fb_PAGE_ACCESS_TOKEN`` String - the secret key of the fb page subscribe event

## fbMessageHandler
### textMessage(text)
* ``text`` String - pre-handled text message
Returns
``
{
  "text": text
}
``

<b>[BACK](https://github.com/Mist-Rain/Bot-Framework#documentation)</b>
