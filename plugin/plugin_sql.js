const
	plugin_format = require('../plugin_format.js'),
	mysql = require('mysql'),
	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "cross_platform"
	});
	
class plugin_sql extends plugin_format{
	
	async run(func, ...args){
		if(func === 'getGroupMember'){
			let nickname_list = await this.getGroupMember(...args);
			return nickname_list;
		} else if(func === 'getUserId'){
			let user_id = await this.getUserId(...args);
			return user_id;
		} else if(func === 'getGroupName'){
			let group_name = await this.getGroupName(...args);
			return group_name;
		} else if(func === 'getPlatform'){
			let platform = await this.getPlatform(...args);
			return platform;
		} else if(func === 'getUser_nickname'){
			let User_nickname = await this.getUser_nickname(...args);
			return User_nickname;
		} else if(func === 'createNickname'){
			let createNickname = await this.createNickname(...args);
			return createNickname;
		} else if(func === 'createGroup'){
			let createGroup = await this.createGroup(...args);
			return createGroup;
		} else if(func === 'UserIsExist'){
			let UserIsExist = await this.UserIsExist(...args);
			return UserIsExist;
		} else if(func === 'joinGroup'){
			let joinGroup = await this.joinGroup(...args);
			return joinGroup;
		} else if(func === 'AddFriend'){
			let AddFriend = await this.AddFriend(...args);
			return AddFriend;
		} else if(func === 'UserInGroup'){
			let UserInGroup = await this.UserInGroup(...args);
			return UserInGroup;
		} else if(func === 'getFriendList'){
			let getFriendList = await this.getFriendList(...args);
			return getFriendList;
		} else if(func === 'friendIsExist'){
			let friendIsExist = await this.friendIsExist(...args);
			return friendIsExist;
		} else if(func === 'groupIsExist'){
			let groupIsExist = await this.groupIsExist(...args);
			return groupIsExist;
		} else {
			console.log("Unknown function.");
		}
	}
	
	// connect to database
	connect(){
		console.log('here is connect\n');
		con.connect();
	}
	// close connect to database
	closeCon(){
		con.end(function(err){
			if(err){ 
				throw err;
			}
			console.log('connect end');
		});
	}
	// get the user platform with nickname
	async getPlatform(nickname){ 
		let data = await this.getData();
		for(let item of data){
			if(arguments[0] === item.nickname){
				let platform = item.platform;
				return platform;
			}
			else if(item.id === data.length-1){
				//console.log("the cross_id is not exist,please enter again");
				return null;
			}
		}
	}
	// get platform
	async getUserId(nickname){
		let data = await this.getData();
		for(let item of data){
			if(arguments[0] === item.nickname){
				let user_id = item.user_id;
				return user_id;
			}
			else if(item.id === data.length-1){
				//console.log("the cross_id is not exist,please enter again");
				return null;
			}
		}
	}
	// get the user's nickname
	async getUser_nickname(user_id){
		let data = await this.getData();
		for(let item of data){
			if(arguments[0] === item.user_id){
				let nickname = item.nickname;
				return nickname;
			}
		}
		return null;
	}
	// get database
	async getData(){
		let value = await new Promise((resolve, reject) => {
			con.query("SELECT * FROM cross_info", (error, results, fields) => {
				if (error) reject(error);
				resolve(results);
			})
		})
		return value;
	}
	// get group_name
	async getGroupName(user_id){
		let data = await this.getData();
		for(let item of data){
			if(user_id === item.user_id){
				return item.group_name;
			}
		}
	}
	//get user friend list
	async getFriendList(user_id){
		let data = await this.getData();
		for(let item of data){
			if(user_id === item.user_id){
				return item.friend;
			}
		}
	}
	// get group members' nickname
	async getGroupMember(user_id, group_name){
		let data = await this.getData();
		let nickname_list = [];
		let group_list = [];
		let temp_group = await this.getGroupName(user_id);
		let check_group = temp_group.split(',');
		for(let i=0; i<check_group.length; i++){
			if(check_group[i] === group_name){
				break;
			} else if(i === check_group.length-1){
				return '並沒有該群組';
			}
		}
		for(let item of data){
			group_list = item.group_name.split(',');
			for(let group of group_list){
				if(group === group_name){
					nickname_list.push(item.nickname);
					break;
				}
			}
		}
		/*
		let nickname_str = '';
		for(let item of nickname_list){
			nickname_str += item + ',';
		}
		*/
		return nickname_list;
	}
	// get auto increment id
	getId(user_id, data){
		for(let item of data){
			if(item.user_id === user_id){
				return item.id;
			}
		}
	}
	// add user to database
	add_user(platform, user_id, nickname){
		let sql = {
			platform: arguments[0],
			user_id: arguments[1],
			nickname: arguments[2],
			group_name: ''
		};
		con.query('INSERT INTO cross_info SET ?', sql, function(err, result){
			if(err){
				throw err;
			}
		});
	}
	// update database
	updateGroup(group_name, id){
		let sql = {
			group_name: arguments[0]
		};
		con.query('UPDATE cross_info SET ? where id = ?', [sql, id], function(err, result){
			if(err) {
				throw err;
			}
		});
	}
	
	// create user's nickname
	async createNickname(platform, user_id, nickname){
		let data = await this.getData();
		for(let item of data){
			if(item.nickname === nickname){
				return '暱稱已被使用，請使用其他暱稱';
			}
		}
		await this.add_user(platform, user_id, nickname);
		return '暱稱建立成功';
	}
	// create group
	async createGroup(user_id, new_group_name){
		let data = await this.getData();
		//console.log(this.groupIsExist(new_group_name, data));
		if(await this.groupIsExist(new_group_name, data) === true){
			return '群組名稱已被使用，請使用其他名稱，sorry啦>uO';
		} else {
			let group_name = await this.getGroupName(user_id, data);
			if(group_name === ''){
				group_name = new_group_name;
			} else {
				group_name += ',' + new_group_name;
			}
			await this.updateGroup(group_name, await this.getId(user_id, data));
			return '群組建立成功';
		}
	}
	// judge group name
	async groupIsExist(group_name){
		let data = await this.getData();
		let group_array = [];
		for(let item of data){
			group_array = item.group_name.split(',');
			for(let group of group_array){
				if(group === group_name){
					return true;
				}
			}
		}
		return false;
	}
	//find the user is exist or not
	async UserIsExist(nickname){
		let data = await this.getData();
		for(let item of data){
			if(item.nickname === nickname){
				return true;
			}
		}
		return false;
	}
	//whether person has been in group
	async UserInGroup(nickname, group){
		let data = await this.getData();
		let group_array;
		for(let item of data){
			if(item.nickname === nickname){
				group_array = item.group_name.split(',');
				for(let g of group_array){
					if(g === group){
						return true;
					}
				}
			}
		}
		return false;
	}
	//add person to group
	async joinGroup(join_group, invite_nickname){
		let data = await this.getData();
		for(let item of data){
			if(invite_nickname === item.nickname){
				let id = item.id;
				let sql;
				if(item.group_name === ""){
					sql = {
						group_name: join_group
					};
				}
				else if(item.group_name !== ""){
					sql = {
						group_name: item.group_name + ',' + join_group
					};
				}
				con.query('UPDATE cross_info SET ? where id = ?', [sql, id], function(err, result){
					if(err) {
						throw err;
					}
				});
				return "已加入" + join_group + "群組";
			}
		}
		return;
	}
	//find the friend is exist or not
	async friendIsExist(user_id, friend_nickname){
		let friend_array = [];
		let data = await this.getData();
		for(let item of data){
			if(item.user_id === user_id){
				friend_array = item.friend.split(',');
				for(let friend of friend_array){
					if(friend === friend_nickname){
						return true;
					}
				}
			}
		}
		return false;
	}
	
	//add friend
	async AddFriend(friend_nickname, user_nickname){
		let data = await this.getData();
		for(let item of data){
			if(user_nickname === item.nickname){
				let id = item.id;
				let sql;
				if(item.friend === ""){
					sql = {
						friend: friend_nickname
					};
				}
				else if(item.friend !== ""){
					sql = {
						friend: item.friend + ',' + friend_nickname
					};
				}
				con.query('UPDATE cross_info SET ? where id = ?', [sql, id], function(err, result){
					if(err) {
						throw err;
					}
				});
			}
			if(friend_nickname === item.nickname){
				let id = item.id;
				let sql;
				if(item.friend === ""){
					sql = {
						friend: user_nickname
					};
				}
				else if(item.friend !== ""){
					sql = {
						friend: item.friend + ',' + user_nickname
					};
				}
				con.query('UPDATE cross_info SET ? where id = ?', [sql, id], function(err, result){
					if(err) {
						throw err;
					}
				});
			}
		}
		return;
	}
}

module.exports = new plugin_sql;
