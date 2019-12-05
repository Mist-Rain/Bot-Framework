# plugin_sql
If you want to use this plugin, you should create a sql server and table.
You can use the modern software [XAMPP](https://www.apachefriends.org/zh_tw/index.html).

## getGroupMember(received_message)
* ``received_message`` String - the received message of chatbot

Returns ``String`` - group member

## createNickname(platform, user_id, nickname)
* ``platform`` String - the user's platform
* ``user_id`` String - the user's id
* ``nickname`` String - the user's nickname

Returns ``String`` - the exec result

## getUserId(nickname)
* ``nickname`` String - the user's nickname

Returns ``String`` - either user's id or null

## AddFriend(friend_nickname, user_nickname)
* ``friend_nickname`` String - the user's nickname you want to add
* ``user_nickname`` String - the user's nickname

Returns ``String`` - the exec result

## getPlatform(nickname)
* ``nickname`` String - the user's nickname

Returns ``String`` - the user's platform

[Sourcecode](https://github.com/Mist-Rain/Bot-Framework/blob/master/plugin/plugin_reply.js)

