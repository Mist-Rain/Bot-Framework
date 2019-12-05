/*
 *	fbAPI.js
 */
 
'use strict'

// http request
const request = require('request');

class API{
	// reply API
	reply(req, message, fb_PAGE_ACCESS_TOKEN){
		let sender_psid = null;
		req.body.entry.map(function(entry){
			sender_psid = entry.messaging[0].sender.id;
		});
		request({
			"uri": "https://graph.facebook.com/v4.0/me/messages",
			"qs": {
				"access_token": fb_PAGE_ACCESS_TOKEN
			},
			"method": "POST",
			"json": {
				"recipient":{
						"id": sender_psid
				},
				"message": message
			}
		}, function(err){
			if(!err){
				console.log('message sent!');
			} else {
				console.error("Unable to send message: "+ err);
			}
		});
	}
	
	push(receiver_psid, message, fb_PAGE_ACCESS_TOKEN){
		request({
			"uri": "https://graph.facebook.com/v4.0/me/messages",
			"qs": {
				"access_token": fb_PAGE_ACCESS_TOKEN
			},
			"method": "POST",
			"json": {
				"recipient":{
						"id": receiver_psid
				},
				"message": message
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