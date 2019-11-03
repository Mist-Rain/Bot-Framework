/*
 *	fbMessageHandler.js
 *	Handle the different message json.
 */
 
'use strict'

class handler{
	// text json
	textMessage(text){
		let message = {
			"text": text
		}
		return message;
	}
	quickMessage(action){
		if(action === '功能表'){
			let message = {
				"text": "你想幹啥",
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"抽卡",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"傳送跨平台訊息",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"建立群組",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"群組邀請",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"好友邀請",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  }
				]
			}
			return message;
		} else if(action === '第一次使用'){
			let message = {
				"text": "使用功能表必須要有暱稱，是否建立?",
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"好",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"不要",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  }
				]
			}
			return message;
		} else if(action === '邀請進入群組'){
			let message = {
				"text": "是否進入群組?",
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"接受",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"拒絕",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  }
				]
			}
			return message;
		} else if(action === '是否接受好友邀請?'){
			let message = {
				"text": "是否接受好友邀請?",
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"接受",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"拒絕",
					"payload":"<POSTBACK_PAYLOAD>",
					"image_url":""
				  }
				]
			}
			return message;
		}
	}
}

function createHandler(){
	return new handler;
}

module.exports = createHandler();