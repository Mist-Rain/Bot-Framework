# Getting started

Take <b>LINE</b> platform for example.

## Get a SSL URL
Use reverse proxy service like [ngrok](https://dashboard.ngrok.com/get-started).

## Create Messaging API channel
[LINE Developer](https://developers.line.biz/console/register/messaging-api/provider/)

### Precautions
Remember to set the Webhook URL with the SSL URL you just getted.

![image](https://i.imgur.com/TZEIAN3.jpg)

Notice that the server listening route should be add after the Webhook URL(e.g. ``server.post('/callback', ...)`` with ``https:OOOOOOOO.ngrok.io/callback``).

## Set secret key in the file ``key_config.ini``

In LINE platform, you will need the ``channel_secret`` and the ``channel_access_token``.
