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

// group and nickname_lists
let group_list = '';
let nickname_list = '';
let join_group = '';
let invite_nickname = '';
let friend_nickname = '';

server.post('/', async function(req, res, next){
	bot.lineVerify(req, res);
	
	//get the receive information
	let platform = bot.getPlatform(req);
	let received_message = bot.getReceivedMessage(req);
	let user_id = bot.getUserId(req);
	let payload = bot.getPayload(req);
	bot.connect(platform, req, res);

	if(con_label === 'one'){
		try{
			// button mode
			if(typeof payload !== 'undefined'){
				if(received_message.match(/^抽卡/)){
					//gacha_time = received_message.match(/^!抽\*[1-9]+[0-9]*/)[0].substring(3);
					gacha_result = plugin.run('plugin_game', parseInt(10, 10));
					reply = await bot.messageHandler(platform ,gacha_result);
					bot.sendAPI(platform, 'reply', req, reply);
					gacha_result = undefined;
				} else if(received_message.match(/^傳送跨平台訊息/)){
					group_list = await plugin.run('plugin_sql', 'getGroupName', user_id);
					if(group_list.length === 0){
						reply = await bot.messageHandler(platform , '你沒有所屬的群組');
						bot.sendAPI(platform, 'reply', req, reply);
					} else {
						reply = await bot.messageHandler(platform ,group_list + '\n請選擇要傳送的群組');
						bot.sendAPI(platform, 'reply', req, reply);
						con_label = 'two';
						con_action = '選擇群組';
					}
				} else if(received_message.match(/^建立群組/)){
					reply = await bot.messageHandler(platform, '請輸入群組名稱');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = received_message;
				} else if(received_message.match(/^群組邀請/)){
					group_list = await plugin.run('plugin_sql', 'getGroupName', user_id);
					reply = await bot.messageHandler(platform, '你想邀請誰進入哪個群組？\n' + group_list + '\n格式：<群組名稱>,<暱稱>');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = received_message;
				// add friend
				} else if(received_message.match(/^好友邀請/)){
					reply = await bot.messageHandler(platform, '你想要邀請誰成為好友呢?');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = received_message;
				// add nickname
				} else if(received_message.match(/^好/)){
					reply = await bot.messageHandler(platform, '請輸入您要取的綽號');
					bot.sendAPI(platform, 'reply', req, reply);
					con_label = 'two';
					con_action = received_message;
				} else if(received_message.match(/^不要/)){
					reply = await bot.messageHandler(platform, '好ㄛ');
					bot.sendAPI(platform, 'reply', req, reply);
				
				// invite group
				} else if(received_message.match(/^接受/)){
					await plugin.run('plugin_sql', 'joinGroup', join_group, invite_nickname); 
					reply = await bot.messageHandler(platform, '已加入群組');
					bot.sendAPI(platform, 'reply', req, reply);
				} else if(received_message.match(/^拒絕/)){
					reply = await bot.messageHandler(platform, '已拒絕加入群組');
					bot.sendAPI(platform, 'reply', req, reply);
				} else if(received_message.match(/^接受邀請/)){
					await plugin.run('plugin_sql', 'AddFriend', friend_nickname, user_nickname); 
					reply = await bot.messageHandler(platform, '您已經與' + user_nickname + "成為好友");
					bot.sendAPI(platform, 'reply', req, reply);
					platform = await plugin.run('plugin_sql', 'getPlatform', user_nickname);
					let invite_user_id = await plugin.run('plugin_sql', 'getUserId', user_nickname);
					let push = await bot.messageHandler(platform , friend_nickname + '已接受您的好友邀請');
					bot.sendAPI(platform, 'push', invite_user_id, push);
				} else if(received_message.match(/^拒絕邀請/)){
					reply = await bot.messageHandler(platform, '已拒絕成為好友');
					bot.sendAPI(platform, 'reply', req, reply);
				} else {
					reply = bot.messageHandler(platform ,'unknown command');
					bot.sendAPI(platform, 'reply', req, reply);
				}
			// text mode
			} else if(received_message === '功能表'){
				if(await plugin.run('plugin_sql', 'getUser_nickname', user_id) === null){
					reply = bot.messageHandler(platform, received_message, '第一次使用');
					bot.sendAPI(platform, 'reply', req, reply);
				} else {
					reply = bot.messageHandler(platform, received_message, '功能表');
					bot.sendAPI(platform, 'reply', req, reply);
				}
			// nlp
			} else if(typeof payload === 'undefined'){
				reply = await plugin.run('plugin_reply', received_message);
				reply = bot.messageHandler(platform, reply);
				bot.sendAPI(platform, 'reply', req, reply);
			}
		} catch(err){
			console.log(err);
		}
		
		// talk two times
	} else if(con_label === 'two'){
		// create nickname
		if(con_action === '好'){
			let nickname = received_message;
			let message = await plugin.run('plugin_sql', 'createNickname', platform, user_id, nickname); 
			reply = await bot.messageHandler(platform , message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
		// create group
		} else if(con_action === '建立群組'){
			let group_name = received_message;
			let message = await plugin.run('plugin_sql', 'createGroup', user_id, group_name); 
			reply = await bot.messageHandler(platform , message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
		// select the group to send message
		} else if(con_action === '選擇群組'){
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
		} else if(con_action === '群組邀請'){
			join_group = received_message.substring(0, received_message.indexOf(','));
			invite_nickname = received_message.substring(received_message.indexOf(',')+1);
			let reply_message;
			//console.log(invite_nickname);
			if(await plugin.run('plugin_sql', 'UserIsExist', invite_nickname)){
				reply_message = "您已邀請" + invite_nickname + "進入" + join_group + "群組";
			}
			else{
				reply_message = "查無此人或群組";
			}
			reply = await bot.messageHandler(platform ,reply_message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
			
			if(reply_message.length >= 8){
				let user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				let invite_user_id = await plugin.run('plugin_sql', 'getUserId', invite_nickname);
				let platform = await plugin.run('plugin_sql', 'getPlatform', invite_nickname);
				//console.log(platform);
				let push = await bot.messageHandler(platform , user_nickname + '邀請你進入' + join_group);
				bot.sendAPI(platform, 'push', invite_user_id, push);
				push = await bot.messageHandler(platform , '功能表', '邀請進入群組');
				bot.sendAPI(platform, 'push', invite_user_id, push);
				con_label = 'one';
				con_action = '';
			}
		} else if(con_action === '好友邀請'){
			friend_nickname = received_message;
			let reply_message;
			let isExist = await plugin.run('plugin_sql', 'FriendIsExist', user_id, friend_nickname);
			if(isExist){
				reply_message = "您與" + friend_nickname + "已經是好友了";
			}
			else{
				reply_message = "已向" + friend_nickname + "發出好友邀請";
			}
			reply = await bot.messageHandler(platform ,reply_message);
			bot.sendAPI(platform, 'reply', req, reply);
			con_label = 'one';
			con_action = '';
			
			if(!isExist){
				let user_nickname = await plugin.run('plugin_sql', 'getUser_nickname', user_id);
				let invite_user_id = await plugin.run('plugin_sql', 'getUserId', friend_nickname);
				let platform = await plugin.run('plugin_sql', 'getPlatform', friend_nickname);
				//console.log(platform);
				let push = await bot.messageHandler(platform , user_nickname + ' 發送了好友邀請給您');
				bot.sendAPI(platform, 'push', invite_user_id, push);
				push = await bot.messageHandler(platform , '功能表', '是否接受好友邀請?');
				bot.sendAPI(platform, 'push', invite_user_id, push);
				con_label = 'one';
				con_action = '';
			}
		}
	} else if(con_label === 'three'){
		if(con_action === '傳送跨平台訊息'){
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
	}
});

server.get('/', function(req, res, next){
	bot.fbSubscribe(req, res);
});