/*	
 *	testBot.js
 */

// bot settings
const
	plugin = require('./plugin_manager.js'),
	connection_manager = require('./connection_manager.js'),
	server = connection_manager.server,
	bot = new connection_manager(8080);

// payload action
action = '';

server.post('/', async function(req, res, next){
	// line webhook url verify
	bot.lineVerify(req, res);
	
	// get the receive information
	platform = bot.getPlatform(req);
	received_message = bot.getReceivedMessage(req);
	user_id = bot.getUserId(req);
	payload = bot.getPayload(req);
	
	// webhook event
	bot.connect(platform, req, res);
	
	// payload: undefined
	if(typeof payload === 'undefined' && typeof received_message !== 'undefined'){
		if(received_message === '功能表'){
			user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
			if(user_nickname === null){
				handled_reply = bot.messageHandler(platform, received_message, '第一次使用');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			} else if(user_nickname !== null){
				handled_reply = bot.messageHandler(platform, received_message, '功能表');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			}
		} else if(action === '建立暱稱'){
			nickname = received_message;
			create_result = await plugin.run('plugin_sql', 'createNickname', platform, user_id, nickname);
			handled_reply = bot.messageHandler(platform, create_result);
			bot.sendAPI(platform, 'reply', req, handled_reply);
			action = '';
		} else if(action === '傳送訊息_好友'){
			if(received_message.indexOf('#') > -1){
				sender_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				receiver_nickname = received_message.substring(0, received_message.indexOf('#'));
				if(await plugin.run('plugin_sql', 'friendIsExist', user_id, receiver_nickname)){
					send_message = sender_nickname + '想對你說: ' + received_message.substring(received_message.indexOf('#')+1);
					receiver_platform = await plugin.run('plugin_sql', 'getPlatform', receiver_nickname);
					receiver_id = await plugin.run('plugin_sql', 'getUserId', receiver_nickname); 
					handled_push = bot.messageHandler(receiver_platform, send_message);
					bot.sendAPI(receiver_platform, 'push', receiver_id, handled_push);
					// 提醒傳送成功
					handled_reply = bot.messageHandler(platform, '訊息傳送成功！');
					bot.sendAPI(platform, 'reply', req, handled_reply);
				} else {
					handled_reply = bot.messageHandler(platform, "查無此人或你跟他不是好友QQ\n(想跟自己聊天要先邀請自己好友唷~笑)");
					bot.sendAPI(platform, 'reply', req, handled_reply);
				}
			} else {
				handled_reply = bot.messageHandler(platform, '格式錯誤啦');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			}
			action = '';
		} else if(action === '傳送訊息_群組'){
			if(received_message.indexOf('#') > -1){
				sender_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				group = received_message.substring(0, received_message.indexOf('#'));
				if(await plugin.run('plugin_sql', 'UserInGroup', sender_nickname, group)){
					send_message = sender_nickname + '對 ' + group + ' 群組說: ' + received_message.substring(received_message.indexOf('#')+1);
					group_member_nickname = await plugin.run('plugin_sql', 'getGroupMember', user_id, group);
					for(receiver_nickname of group_member_nickname){
						receiver_platform = await plugin.run('plugin_sql', 'getPlatform', receiver_nickname);
						receiver_id = await plugin.run('plugin_sql', 'getUserId', receiver_nickname); 
						handled_push = bot.messageHandler(receiver_platform, send_message);
						bot.sendAPI(receiver_platform, 'push', receiver_id, handled_push);
					}
				} else {
					handled_reply = bot.messageHandler(platform, '查無此群組或你不在群組內QQ');
					bot.sendAPI(platform, 'reply', req, handled_reply);
				}
			} else {
				handled_reply = bot.messageHandler(platform, '格式錯誤唷！');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			}
			action = '';
		} else if(action === '建立群組_輸入群組名稱'){
			group_name = received_message;
			if(group_name !== "取消"){
				create_result = await plugin.run('plugin_sql', 'createGroup', user_id, group_name); 
				handled_reply = await bot.messageHandler(platform , create_result);
				bot.sendAPI(platform, 'reply', req, handled_reply);
			} else {
				handled_reply = await bot.messageHandler(platform , '沒關係,你很好');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			}
			action = '';
		} else if(action === '群組邀請'){
			if(received_message.indexOf('#') > -1){
				join_group = received_message.substring(0, received_message.indexOf('#'));
				invite_nickname = received_message.substring(received_message.indexOf('#')+1);
				if(await plugin.run('plugin_sql', 'UserIsExist', invite_nickname) && await plugin.run('plugin_sql', 'groupIsExist', join_group)){
					in_group = await plugin.run('plugin_sql', 'UserInGroup', invite_nickname, join_group)
					if(in_group){
						reply = await bot.messageHandler(platform, invite_nickname + " 已經在群組中了唷！");
						bot.sendAPI(platform, 'reply', req, reply);
					} else if(!in_group){
						handled_reply = await bot.messageHandler(platform, "您已邀請 " + invite_nickname + " 進入 " + join_group + " 群組");
						bot.sendAPI(platform, 'reply', req, handled_reply);
						
						sender_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
						invite_user_id = await plugin.run('plugin_sql', 'getUserId', invite_nickname);
						platform = await plugin.run('plugin_sql', 'getPlatform', invite_nickname);
						push = await bot.messageHandler(platform , '功能表', sender_nickname + '向您發出邀請進入群組' + '(' + join_group + ')');
						bot.sendAPI(platform, 'push', invite_user_id, push);
					}
				} else {
					reply = await bot.messageHandler(platform, "查無此人或群組QQ");
					bot.sendAPI(platform, 'reply', req, reply);
				}
			} else {
				handled_reply = bot.messageHandler(platform, '格式錯誤唷！');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			}
			action = '';
		} else if(action === '好友邀請'){
			friend_nickname = received_message;
			friendIsExist = await plugin.run('plugin_sql', 'friendIsExist', user_id, friend_nickname);
			UserIsExist = await plugin.run('plugin_sql', 'UserIsExist', friend_nickname);
			if(friendIsExist){
				handled_reply = bot.messageHandler(platform, "您與" + friend_nickname + "已經是好友了");
				bot.sendAPI(platform, 'reply', req, handled_reply);
			} else if(UserIsExist && !friendIsExist){
				handled_reply = bot.messageHandler(platform, "已向" + friend_nickname + "發出好友邀請");
				bot.sendAPI(platform, 'reply', req, handled_reply);
				
				sender_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				invite_user_id = await plugin.run('plugin_sql', 'getUserId', friend_nickname);
				platform = await plugin.run('plugin_sql', 'getPlatform', friend_nickname);
				message = sender_nickname + ' 發送了好友邀請給您';
				push = await bot.messageHandler(platform , message, message + '\n是否接受好友邀請?');
				bot.sendAPI(platform, 'push', invite_user_id, push);
			} else if(!UserIsExist){
				handled_reply = bot.messageHandler(platform, '查無此人唷');
				bot.sendAPI(platform, 'reply', req, handled_reply);
			}
			
			action = '';
		} else {
			NLP_reply = await plugin.run('plugin_reply', received_message);
			handled_reply = bot.messageHandler(platform, NLP_reply);
			bot.sendAPI(platform, 'reply', req, handled_reply);
		}
	// payload: defined
	} else if(typeof payload !== 'undefined'){
		switch(payload){
			case '第一次使用_好':
				reply = await bot.messageHandler(platform, '請輸入您要取的綽號');
				bot.sendAPI(platform, 'reply', req, reply);
				action = '建立暱稱';
				break;
			case '第一次使用_不要':
				break;
			case '抽卡':
				gacha_result = plugin.run('plugin_game', 10);
				handled_reply = await bot.messageHandler(platform, gacha_result);
				bot.sendAPI(platform, 'reply', req, handled_reply);
				break;
			case '傳送訊息':
				handled_reply = await bot.messageHandler(platform , '功能表', '請選擇要傳送給朋友或群組');
				bot.sendAPI(platform, 'reply', req, handled_reply);
				break;
			case '傳送訊息_好友':
				friend = await plugin.run('plugin_sql', 'getFriendList', user_id);
				if(friend.length !== 0){
					handled_reply = await bot.messageHandler(platform, "請選擇要傳送的對象:\n" + friend + "\n並傳送訊息(格式: <好友>#<訊息>)");
					bot.sendAPI(platform, 'reply', req, handled_reply);
					action = '傳送訊息_好友';
				} else if(friend.length === 0){
					handled_reply = await bot.messageHandler(platform, "沒朋友哭哭哦，可以考慮+自己好友哦Ou<");
					bot.sendAPI(platform, 'reply', req, handled_reply);
				}
				break;
			case '傳送訊息_群組':
				group = await plugin.run('plugin_sql', 'getGroupName', user_id);
				if(group.length !== 0){
					handled_reply = await bot.messageHandler(platform, "請選擇要傳送的群組:\n" + group + "\n並傳送訊息(<群組>#<訊息>)");
					bot.sendAPI(platform, 'reply', req, handled_reply);
					action = '傳送訊息_群組';
				} else if(group.length === 0){
					handled_reply = await bot.messageHandler(platform, "沒有群組QQ，也可以用群組跟自己聊天>vO");
					bot.sendAPI(platform, 'reply', req, handled_reply);
				}
				break;
			case '建立群組':
				handled_reply = await bot.messageHandler(platform, "請輸入群組名稱\n不想創請打<取消>(那你按屁按阿ˋˊ)");
				bot.sendAPI(platform, 'reply', req, handled_reply);
				action = '建立群組_輸入群組名稱';
				break;
			case '群組邀請':
				group_list = await plugin.run('plugin_sql', 'getGroupName', user_id);
				if(typeof group_list.length !== 0){
					handled_reply = await bot.messageHandler(platform, '想邀請誰進入哪個群組呀>w<\n' + group_list + '\n格式：<群組名稱>#<暱稱>');
					bot.sendAPI(platform, 'reply', req, handled_reply);
					action = '群組邀請';
				} else {
					handled_reply = await bot.messageHandler(platform, '還沒有群組唷！趕快去加入/創建吧～');
					bot.sendAPI(platform, 'reply', req, handled_reply);
				}
				break;
			case '接受群組邀請':
				await plugin.run('plugin_sql', 'joinGroup', join_group, invite_nickname); 
				reply = await bot.messageHandler(platform, '成功加入 ٩（๑òωó๑）۶');
				bot.sendAPI(platform, 'reply', req, reply);
				break;
			case '拒絕群組邀請':
				reply = await bot.messageHandler(platform, '拒絕加入群組QAQ');
				bot.sendAPI(platform, 'reply', req, reply);
				break;
			case '好友邀請':
				handled_reply = await bot.messageHandler(platform, "想邀請誰成為好友 >//<\n(輸入<暱稱>)");
				bot.sendAPI(platform, 'reply', req, handled_reply);
				action = '好友邀請';
				break;
			case '接受好友邀請':
				await plugin.run('plugin_sql', 'AddFriend', friend_nickname, user_nickname); 
				reply = await bot.messageHandler(platform, '您已經與' + user_nickname + "成為好友");
				bot.sendAPI(platform, 'reply', req, reply);
				platform = await plugin.run('plugin_sql', 'getPlatform', user_nickname);
				invite_user_id = await plugin.run('plugin_sql', 'getUserId', user_nickname);
				push = await bot.messageHandler(platform , friend_nickname + '已接受您的好友邀請');
				bot.sendAPI(platform, 'push', invite_user_id, push);
				break;
			case '拒絕好友邀請':
				reply = await bot.messageHandler(platform, '拒絕加入群組QAQ');
				bot.sendAPI(platform, 'reply', req, reply);
				break;
		}
	}
});

server.get('/', function(req, res, next){
	// fb page subscribe verify
	bot.fbSubscribe(req, res);
});