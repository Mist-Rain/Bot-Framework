const 
	plugin_format = require('../plugin_format.js'),
	readline = require('readline'),
	{ NlpManager } = require('node-nlp'),
	trainnlp = require('../train-nlp'),
	threshold = 0.5,
	nlpManager = new NlpManager({ languages: ['ch','en'] });
	
class plugin_reply extends plugin_format{
	
	run(...args){
		//做這個plugin要做的事
		let reply = this.replyNLPMessage(arguments[0]);
		return reply;
	}
	
	// function replyNLPMessage
	async replyNLPMessage(received_message){
		let reply = await this.replyNLP(received_message);
		return reply;
	}
	// nlp function
	async nlp(line){
		const result = await nlpManager.process(line);
		let answer =
		result.score > threshold && result.answer
		? result.answer
		: "抱歉我聽不懂哦";
		return answer;
	}
	async replyNLP(message){
		await trainnlp(nlpManager);
		let reply = await this.nlp(message);
		return reply;
	}
}

module.exports = new plugin_reply();