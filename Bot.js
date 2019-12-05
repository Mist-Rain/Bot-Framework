/*	
 *	Bot.js
 *	Demo chat bot.
 */

// bot settings
const
	plugin = require('./plugin_manager.js'),
	base = require('./base.js'),
	server = base.server,
	bot = new base(8080);

// game
let gacha_time = undefined;
let gacha_result = undefined;

// reply
let reply = undefined;

// one time conversation label and the thing what to do
let con_label = 'one';
let con_action = '';

// skip the received_message
let skip = 0;

// group and nickname_lists
let group_list = '';
let nickname_list = '';
let join_group = '';
let invite_nickname = '';
let friend_nickname = '';
let user_nickname = '';

server.post('/', async function(req, res, next){
	bot.lineVerify(req, res);
	
	//get the receive information
	let platform = bot.getPlatform(req);
	let received_message = bot.getReceivedMessage(req);
	let user_id = bot.getUserId(req);
	let payload = bot.getPayload(req);
	
	// webhook event
	bot.connect(platform, req, res);

	if(con_label === 'one'){
		try{
			// text mode
			if(received_message === '功能表'){
				if(await plugin.run('plugin_sql', 'getUser_nickname', user_id) === null){
					reply = bot.messageHandler(platform, received_message, '第一次使用');
					bot.sendAPI(platform, 'reply', req, reply);
				} else {
					reply = bot.messageHandler(platform, received_message, '功能表');
					bot.sendAPI(platform, 'reply', req, reply);
				}
			// button mode
			} else if(typeof payload !== 'undefined'){
				if(payload === "抽卡"){
					//gacha_time = received_message.match(/^!抽\*[1-9]+[0-9]*/)[0].substring(3);
					gacha_result = plugin.run('plugin_game', parseInt(10, 10));
					reply = await bot.messageHandler(platform ,gacha_result);
					bot.sendAPI(platform, 'reply', req, reply);
					gacha_result = undefined;
				} else if(payload === "傳送訊息"){
						reply = await bot.messageHandler(platform , '功能表', '請選擇要傳送給朋友或群組');
						console.log(reply);
						bot.sendAPI(platform, 'reply', req, reply);
						/*
						con_label = 'two';
						con_action = '選擇好友或群組';
						*/
				} else if(payload === "建立群組"){
					reply = await bot.messageHandler(platform, '請輸入群組名稱');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = payload;
				} else if(payload === "群組邀請"){
					group_list = await plugin.run('plugin_sql', 'getGroupName', user_id);
					reply = await bot.messageHandler(platform, '你想邀請誰進入哪個群組？\n' + group_list + '\n格式：<群組名稱>,<暱稱>');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = payload;
				// add friend
				} else if(payload === "好友邀請"){
					reply = await bot.messageHandler(platform, '你想要邀請誰成為好友呢?');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = payload;
				// add nickname
				} else if(payload === "好"){
					reply = await bot.messageHandler(platform, '請輸入您要取的綽號');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = payload;
				} else if(payload === "不要"){
					reply = await bot.messageHandler(platform, '好ㄛ');
					bot.sendAPI(platform, 'reply', req, reply);
				
				// invite group
				} else if(payload === "接受"){
					await plugin.run('plugin_sql', 'joinGroup', join_group, invite_nickname); 
					reply = await bot.messageHandler(platform, '已加入群組');
					bot.sendAPI(platform, 'reply', req, reply);
				} else if(payload === "拒絕"){
					reply = await bot.messageHandler(platform, '已拒絕加入群組');
					bot.sendAPI(platform, 'reply', req, reply);
				} else if(payload === "接受邀請"){
					await plugin.run('plugin_sql', 'AddFriend', friend_nickname, user_nickname); 
					reply = await bot.messageHandler(platform, '您已經與' + user_nickname + "成為好友");
					bot.sendAPI(platform, 'reply', req, reply);
					platform = await plugin.run('plugin_sql', 'getPlatform', user_nickname);
					let invite_user_id = await plugin.run('plugin_sql', 'getUserId', user_nickname);
					let push = await bot.messageHandler(platform , friend_nickname + '已接受您的好友邀請');
					bot.sendAPI(platform, 'push', invite_user_id, push);
				} else if(payload === "拒絕邀請"){
					reply = await bot.messageHandler(platform, '已拒絕成為好友');
					bot.sendAPI(platform, 'reply', req, reply);
				} else if(payload === "好友"){
					let friend = await plugin.run('plugin_sql', 'getFriendList', user_id);
					reply = await bot.messageHandler(platform, "請選擇要傳送的對象:\n" + friend + "\n並傳送訊息(<好友>#<訊息>)");
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = '傳訊息給好友';
				} else if(payload === "群組"){
					let group = await plugin.run('plugin_sql', 'getGroupName', user_id);
					reply = await bot.messageHandler(platform, "請選擇要傳送的群組:\n" + group + "\n並傳送訊息(<群組>#<訊息>)");
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = '傳訊息給群組';
				}
				else {
					reply = bot.messageHandler(platform ,'unknown command');
					bot.sendAPI(platform, 'reply', req, reply);
				}
				if(platform === 'line'){
					skip++;
				}
			// nlp
			} else if(typeof payload === 'undefined' && skip < 1){
				reply = await plugin.run('plugin_reply', received_message);
				reply = bot.messageHandler(platform, reply);
				bot.sendAPI(platform, 'reply', req, reply);
			}
			if(typeof payload === 'undefined' && skip === 1){
				skip = 0;
			}
		} catch(err){
			console.log(err);
		}
		
		// talk two times
	} else if(con_label === 'two'){
		// create nickname
		if(con_action === '好' && skip < 1){
			let nickname = received_message;
			let message = await plugin.run('plugin_sql', 'createNickname', platform, user_id, nickname); 
			reply = await bot.messageHandler(platform , message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
		// create group
		} else if(con_action === '建立群組' && skip < 1){
			let group_name = received_message;
			let message = await plugin.run('plugin_sql', 'createGroup', user_id, group_name); 
			reply = await bot.messageHandler(platform , message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
		// select the group to send message
		} else if(con_action === '選擇群組' && skip < 1){
			let group_name = received_message;
			nickname_list = await plugin.run('plugin_sql', 'getGroupMember', user_id, group_name); 
			reply = await bot.messageHandler(platform , nickname_list);
			bot.sendAPI(platform, 'reply', req, reply);
			if(nickname_list.length === 6){
				con_label = 'one';
				con_action = '';
			} else {
				con_label = 'three';
				con_action = '傳送跨平台訊息';
			}
		// invite someone
		} else if(con_action === '群組邀請' && skip < 1){
			join_group = received_message.substring(0, received_message.indexOf(','));
			invite_nickname = received_message.substring(received_message.indexOf(',')+1);
			let reply_message;
			//console.log(invite_nickname);
			if(await plugin.run('plugin_sql', 'UserIsExist', invite_nickname)){
				if(await plugin.run('plugin_sql', 'UserInGroup', invite_nickname, join_group)){
					reply_message = invite_nickname + "已經在此群組中"; 
				}
				else{ 
					reply_message = "您已邀請" + invite_nickname + "進入" + join_group + "群組";
				}
			}
			else{
				reply_message = "查無此人或群組";
			}
			reply = await bot.messageHandler(platform ,reply_message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
			
			if(reply_message.indexOf("您已邀請") > -1){
				user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				let invite_user_id = await plugin.run('plugin_sql', 'getUserId', invite_nickname);
				let platform = await plugin.run('plugin_sql', 'getPlatform', invite_nickname);
				push = await bot.messageHandler(platform , '功能表', user_nickname + '向您發出邀請進入群組' + '(' + join_group + ')');
				bot.sendAPI(platform, 'push', invite_user_id, push);
				con_label = 'one';
				con_action = '';
			}
		} else if(con_action === '好友邀請' && skip < 1){
			friend_nickname = received_message;
			let reply_message;
			let friendisExist = await plugin.run('plugin_sql', 'FriendIsExist', user_id, friend_nickname);
			let UserIsExist = await plugin.run('plugin_sql', 'UserIsExist', friend_nickname);
			if(friendisExist){
				reply_message = "您與" + friend_nickname + "已經是好友了";
			} else if(UserIsExist && !friendisExist){
				reply_message = "已向" + friend_nickname + "發出好友邀請";
			} else if(!UserIsExist){
				reply_message = "不存在此用戶";
			}
			reply = await bot.messageHandler(platform ,reply_message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
			
			if(!friendisExist){
				user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				let invite_user_id = await plugin.run('plugin_sql', 'getUserId', friend_nickname);
				let platform = await plugin.run('plugin_sql', 'getPlatform', friend_nickname);
				let message = user_nickname + ' 發送了好友邀請給您';
				let push = await bot.messageHandler(platform , message, message + '\n是否接受好友邀請?');
				bot.sendAPI(platform, 'push', invite_user_id, push);
				con_label = 'one';
				con_action = '';
			}
		} else if(con_action === "傳訊息給好友" && skip < 1){
			//console.log("get in two con");
			let user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
			let nickname = received_message.substring(0, received_message.indexOf('#'));
			let message = user_nickname + '傳了訊息給您 : ' + received_message.substring(received_message.indexOf('#')+1);
			platform = await plugin.run('plugin_sql', 'getPlatform', nickname);
			if(await plugin.run('plugin_sql', 'UserIsExist', nickname)){
				let receiver_id = await plugin.run('plugin_sql', 'getUserId', nickname);
				let push = await bot.messageHandler(platform , message);
				bot.sendAPI(platform, 'push', receiver_id, push);
				con_label = 'one';
				con_action = '';
			}
			else if(con_label === "two"){
				//console.log('no person');
				let reply = await bot.messageHandler(platform , '查無此人');
				bot.sendAPI(platform, 'push', user_id, reply);
				con_label = 'one';
				con_action = '';
			}
		} else if(con_action === "傳訊息給群組" && skip < 1){
			//console.log("get in two con");
			let user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
			let group = received_message.substring(0, received_message.indexOf('#'));
			let message = user_nickname + "向群組" + '(' + group + ')' +'傳送了訊息 : ' + received_message.substring(received_message.indexOf('#')+1);
			let group_list = await plugin.run('plugin_sql', 'getGroupName', user_id);
			let group_array = group_list.split(',');
			let check_group = false;
			for(let item of group_array){
				if(group === item){
					check_group = true;
				}
			}
			if(check_group){
				let group_member = await plugin.run('plugin_sql', 'getGroupMember', user_id, group);
				for(let member of group_member){
					platform = await plugin.run('plugin_sql', 'getPlatform', member);
					let receiver_id = await plugin.run('plugin_sql', 'getUserId', member);
					let push = await bot.messageHandler(platform , message);
					bot.sendAPI(platform, 'push', receiver_id, push);
				}
				con_label = 'one';
				con_action = '';
			}
			else{
				//console.log('no person');
				let reply = await bot.messageHandler(platform , '查無此群組');
				bot.sendAPI(platform, 'push', user_id, reply);
				con_label = 'one';
				con_action = '';
			}
		}
		if(typeof payload === 'undefined' && skip === 1){
				skip = 0;
		}
	} else if(con_label === 'three'){
		if(con_action === '傳送跨平台訊息' && skip < 1){
			let user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
			let nickname_array = nickname_list.split(' ');
			let nickname = received_message.substring(0, received_message.indexOf('#'));
			let message = user_nickname + '傳了訊息給您 : ' + received_message.substring(received_message.indexOf('#')+1);
			platform = await plugin.run('plugin_sql', 'getPlatform', nickname);
			for(let item of nickname_array){
				if(nickname === item){
					let receiver_id = await plugin.run('plugin_sql', 'getUserId', nickname);
					let push = await bot.messageHandler(platform , message);
					bot.sendAPI(platform, 'push', receiver_id, push);
					con_label = 'one';
					con_action = '';
				}
			}
			if(con_label === 'three'){
				let push = await bot.messageHandler(platform , '此人非群組成員');
				bot.sendAPI(platform, 'push', user_id, push);
				con_label = 'one';
				con_action = '';
			}
		}
		if(typeof payload === 'undefined' && skip === 1){
				skip = 0;
		}
	}
});

server.get('/', function(req, res, next){
	bot.fbSubscribe(req, res);
});