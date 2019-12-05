/*
 *	base.js
 *	Contain the based functions that building a bot.
 */

'use strict'
// load config file
const
	fs = require('fs'),
	ini = require('ini'),
	key_config = ini.parse(fs.readFileSync('./key_config.ini', 'utf-8')),
	line_config = key_config.line,
	fb_config = key_config.fb;
	
// secrect key settings
const
	line_channel_secret = line_config['channel_secret'],
	line_channel_access_token = line_config['channel_access_token'],
	fb_PAGE_ACCESS_TOKEN = fb_config['PAGE_ACCESS_TOKEN'];

// http request
const request = require('request');

 // http server
const
	express = require('express'),
	bodyParser = require('body-parser'),
	server = express();
	
// API
const
	lineAPI = require('./API/lineAPI.js'),
	fbAPI = require('./API/fbAPI.js'),
	lineHandler = require('./API/lineMessageHandler.js'),
	fbHandler = require('./API/fbMessageHandler.js');

// middleware
server.use(bodyParser.json());

class base {
	// constructor
	constructor(port){
		server.listen(port, function(){
			console.log("Server is running at port %d", port);
		});
	}
	
	// get the source platform of req
	getPlatform(req){
		let agent = req.get("User-Agent");
		if(agent === "LineBotWebhook/1.0"){
			return "line";
		} else if (agent === "facebookexternalua"){
			return "fb";
		}
	}
	
	// return the received message
	getReceivedMessage(req){
		let platform = this.getPlatform(req);
		let message = undefined;
		if(platform === 'line'){
			req.body.events.map(function(events){
				if(events.type === "message"){
					message = events.message.text;
				}
			})
			return message;
		}
		else if(platform === 'fb'){
			req.body.entry.map(function(entry){
				message = entry.messaging[0].message.text;
			})
			return message;
		}
	}
	
	getUserId(req){
		let platform = this.getPlatform(req);
		let user_id = undefined;
		if(platform === 'line'){
			req.body.events.map(function(events){
				user_id = events.source.userId;
			})
			return user_id;
		}
		else if(platform === 'fb'){
			req.body.entry.map(function(entry){
				user_id = entry.messaging[0].sender.id;
			})
			return user_id;
		}
	}
	
	getPayload(req){
		let platform = this.getPlatform(req);
		let payload = undefined;
		if(platform === 'fb'){
			req.body.entry.map(function(entry){
				if(typeof entry.messaging[0].message.quick_reply !=='undefined'){
					payload = entry.messaging[0].message.quick_reply.payload;
				}
			});
			return payload;
		} else if(platform === 'line'){
			req.body.events.map(function(events){
				if(events.type === "postback"){
					payload = events.postback.data;
				}
			});
			return payload;
		}
	}
	
	// line webhook URL verify: POST
	lineVerify(req, res){
		if(req.get("User-Agent") === "LINE-Developers/0.1"){
			let verify_token0 = "00000000000000000000000000000000";
			let verify_token1 = "ffffffffffffffffffffffffffffffff";
			if(req.body.events[0].replyToken === verify_token0 && 
			   req.body.events[1].replyToken === verify_token1){
				res.sendStatus(200);
				console.log("Line webhook url verified.");
			}
		}
	}
	
	// line webhook event: POST
	lineCon(req, res, next){
		let body = req.body;
		if(req.get("User-Agent") === "LineBotWebhook/1.0") {
			// signature validation
			// use channel_secret as SHA-256 crypto hash key
			// then compare with X-LINE-Signature
			body.events.forEach(function(events){
				let crypto = require('crypto');
				let hash = crypto
				.createHmac('sha256', line_channel_secret)
				.update(Buffer.from(JSON.stringify(body), 'utf8'))
				.digest('base64');
				
				if(hash === req.get("X-LINE-Signature")) {
					res.sendStatus(200);
					console.log(body.events);
					console.log('FROM_LINE');
				} else {
					res.sendStatus(403);
				}
			});
		}
	}
	
	// fb page subscribe: GET
	fbSubscribe(req, res, next){
		// webhook verify token
		let VERIFY_TOKEN = fb_PAGE_ACCESS_TOKEN;
				
		// Parse the query params
		let mode = req.query['hub.mode'];
		let token = req.query['hub.verify_token'];
		let challenge = req.query['hub.challenge'];
		
		if(mode && token){
			if(mode === 'subscribe' && token === VERIFY_TOKEN){
				console.log('Facebook webhook verified.');
				res.status(200).send(challenge);
			} else {
				res.sendStatus(403);
			}
		} else if(!mode && !token && next) {
			next();
		}
	}
	
	// fb webhook event: POST
	fbCon(req, res, next){	
		let body = req.body;
		if(body.object){
			// Checks this is an event from a page subscription
			if(body.object === 'page'){
				// Iterates over each entry - there may be multiple if batched
				body.entry.forEach(function(entry){
					// Gets the message. entry.messaging is an array, but 
					// will only ever contain one message, so we get index 0
					let webhook_event = entry.messaging[0];
					console.log(webhook_event);
				});
				// Returns a '200 OK' response to all requests
				res.status(200).send('EVENT_RECEIVED');
				console.log('FROM_FB');
			} else {
				// Returns a '404 Not Found' if event is not from a page subscription
				res.sendStatus(404);
			}
		} else if(!body.object && next) {
			next();
		}
	}
	
	// multiple platform connection if the platform is not sure
	connect(platform, req, res ,next){
		switch(platform){
			case 'line':
				this.lineCon(req, res, next);
				break;
			case 'fb':
				this.fbCon(req, res, next);
				break;
		}
	}
	
	// multiple send API if the platform is not sure
	sendAPI(platform, event, req, message){
		if(message!== null){
			switch(platform){
				case 'line':
					this.lineSendAPI(event, req, message);
					break;
				case 'fb':
					this.fbSendAPI(event, req, message);
					break;
			}
		}
	}	
	
	// line send API
	lineSendAPI(event, req, message){
		if(message !== null){
			switch(event){
				case 'reply':
					lineAPI.reply(req, message, line_channel_access_token);
					break;
				case 'push':
					lineAPI.push(req, message, line_channel_access_token);
					break;
				default:
					console.log('unknown event');
					break;
			}
		}
	}
	
	// fb send API
	fbSendAPI(event, req, message){
		if(message !== null){
			switch(event){
				case 'reply':
					fbAPI.reply(req, message, fb_PAGE_ACCESS_TOKEN);
					break;
				case 'push':
					fbAPI.push(req, message, fb_PAGE_ACCESS_TOKEN);
					break;
				default:
					console.log('unknown event');
					break;
			}
		}
	}
	
	// send message handler
	messageHandler(platform, message, button_action){
		if(platform === 'line'){
			if(arguments[2]){
				return lineHandler.quickMessage(button_action);
			} else {
				return lineHandler.textMessage(message);
			}
		}
		else if(platform === 'fb'){
			if(arguments[2]){
				return fbHandler.quickMessage(button_action);
			} else {
				return fbHandler.textMessage(message);
			}
		}
	}
}

module.exports = base;
module.exports.server = server;