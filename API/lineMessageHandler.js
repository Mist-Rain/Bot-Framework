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
	quickMessage(action, meg){
		if(action === '功能表'){
			let message = [{
				"type": "text",
				"text": "你想做甚麼？",
				"quickReply": {
					"items":[
						{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "抽卡",
								"data": "抽卡",
								"text": "抽卡"
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "傳送訊息",
								"data": "傳送訊息",
								"text": "傳送訊息"
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "建立群組",
								"data": "建立群組",
								"text": "建立群組"
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "群組邀請",
								"data": "群組邀請",
								"text": "群組邀請"
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "好友邀請",
								"data": "好友邀請",
								"text": "好友邀請"
							}
						}
					]
				}
			}]
			return message;
		} else if(action === '第一次使用'){
			let message = [{
				"type": "text",
				"text": "使用功能表必須要有暱稱，是否建立?",
				"quickReply": {
					"items":[
						{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "好",
								"data": "好",
								"text": "好"
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "不要",
								"data": "不要",
								"text": "不要"
							}
						}
					]
				}
			}]
			return message;
		} else if(action.indexOf('好友或群組')){
			let message = [{
				"type":"text",
				"text": action,
				"quickReply": {
					"items":[
						{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "好友",
								"data": "好友",
								"text": "好友"
							}
						},{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "群組",
								"data": "群組",
								"text": "群組"
							}
						}
					]
				}
			}]
			return message;
		} else if(action.indexOf("邀請進入")){
			let message = [{
				"type":"text",
				"text": action,
				"quickReply": {
					"items":[
						{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "接受",
								"data": "接受",
								"text": "接受"
							}
						},{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "拒絕",
								"data": "拒絕",
								"text": "拒絕"
							}
						}
					]
				}
			}]
			return message;
		} else if(action.indexOf("是否接受好友邀請?")){
			let message = [{
				"type":"text",
				"text": action,
				"quickReply": {
					"items":[
						{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "接受邀請",
								"data": "接受邀請",
								"text": "接受邀請"
							}
						},{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "拒絕邀請",
								"data": "拒絕邀請",
								"text": "拒絕邀請"
							}
						}
					]
				}
			}]
			return message;
		}
	}
}

function createHandler(){
	return new handler;
}

module.exports = createHandler();