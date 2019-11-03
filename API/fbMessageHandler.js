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
				"text": "您需要甚麼功能?",
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"抽卡",
					"payload":"抽卡",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"傳送訊息",
					"payload":"傳送訊息",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"建立群組",
					"payload":"建立群組",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"群組邀請",
					"payload":"群組邀請",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"好友邀請",
					"payload":"好友邀請",
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
					"payload":"好",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"不要",
					"payload":"不要",
					"image_url":""
				  }
				]
			}
			return message;
		} else if(action === "請選擇要傳送給好友或群組"){
			let message = {
				"text": action,
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"好友",
					"payload":"好友",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"群組",
					"payload":"群組",
					"image_url":""
				  }
				]
			}
			return message;
		} else if(action.indexOf("邀請進入")){
			let message = {
				"text": action,
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"接受",
					"payload":"接受",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"拒絕",
					"payload":"拒絕",
					"image_url":""
				  }
				]
			}
			return message;
		} else if(action.indexOf("是否接受好友邀請?")){
			let message = {
				"text": action,
				"quick_replies":[
				  {
					"content_type":"text",
					"title":"接受邀請",
					"payload":"接受邀請",
					"image_url":""
				  },{
					"content_type":"text",
					"title":"拒絕邀請",
					"payload":"拒絕邀請",
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