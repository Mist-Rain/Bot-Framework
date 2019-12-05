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
				"text": "請選擇功能OuO",
				"quickReply": {
					"items":[
						{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "抽卡",
								"data": "抽卡",
								"text": ""
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "傳送訊息",
								"data": "傳送訊息",
								"text": ""
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "建立群組",
								"data": "建立群組",
								"text": ""
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "群組邀請",
								"data": "群組邀請",
								"text": ""
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "好友邀請",
								"data": "好友邀請",
								"text": ""
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
								"text": ""
							}
						},{
							"type": "action",
							"action": {
								"type": "postback",
								"label": "不要",
								"data": "不要",
								"text": ""
							}
						}
					]
				}
			}]
			return message;
		} else if(action.indexOf("是否接受好友") > -1){
			let message = [{
				"type":"text",
				"text": action,
				"quickReply": {
					"items":[
						{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "接受邀請",
								"data": "接受好友邀請",
								"text": ""
							}
						},{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "拒絕邀請",
								"data": "拒絕好友邀請",
								"text": ""
							}
						}
					]
				}
			}]
			return message;
		} else if(action.indexOf("邀請進入") > -1){
			let message = [{
				"type":"text",
				"text": action,
				"quickReply": {
					"items":[
						{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "接受",
								"data": "接受群組邀請",
								"text": ""
							}
						},{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "拒絕",
								"data": "拒絕群組邀請",
								"text": ""
							}
						}
					]
				}
			}]
			return message;
		}  else if(action.indexOf("請選擇要傳送給朋友或群組") > -1){
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
								"data": "傳送訊息_好友",
								"text": ""
							}
						},{
							"type": "postback",
							"action": {
								"type": "postback",
								"label": "群組",
								"data": "傳送訊息_群組",
								"text": ""
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