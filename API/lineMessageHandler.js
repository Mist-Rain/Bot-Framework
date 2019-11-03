/*
 *	lineMessageHandler.js
 *	Handle the different message json.
 */ 
 
'use strict'

class handler{
	// text json
	textMessage(text){
		let message = [{
			"type": "text",
			"text": text
		}]
		return message;
	}
}

function createHandler(){
	return new handler;
}

module.exports = createHandler();