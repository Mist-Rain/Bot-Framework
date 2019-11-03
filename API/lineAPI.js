/*	
 *	lineAPI.js
 */
 
'use strict'

// http request
const request = require('request');

class API{
	// reply API
	reply(req, message, line_channel_access_token){
		let reply_token = null;
		req.body.events.map(function(events){
			reply_token = events.replyToken;
		});
		request({
			"uri": "https://api.line.me/v2/bot/message/reply",
			"method": "POST",
			"json": {
				"replyToken": reply_token,
				"messages": message
			},
			"headers": {
				"Content-Type": "application/json",
				"Authorization" : `Bearer ${line_channel_access_token}`
			}
		}, function(err){
			if(!err){
				console.log('message sent!');
			} else {
				console.error("Unable to send message: "+ err);
			}
		});
	}
	
	// push API
	push(req, message, line_channel_access_token){
		let user_id = req;
		request({
            "uri": "https://api.line.me/v2/bot/message/push",
            "method": "POST",
            "json": {
                "to": user_id,
                "messages": message
            },
            "headers": {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${line_channel_access_token}`
            }
        }, function(err){
			if(!err){
				console.log('message sent!');
			} else {
				console.error("Unable to send message: "+ err);
			}
		});
	}
}

function createAPI(){
	return new API;
}

module.exports = createAPI();