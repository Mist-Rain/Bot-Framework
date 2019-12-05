const 
	readline = require('readline'),
	{ NlpManager } = require('node-nlp'),
	trainnlp = require('./train-nlp'),
	threshold = 0.5,
	nlpManager = new NlpManager({ languages: ['ch','en'] });

function say(message) {
  // eslint-disable-next-line no-console
  console.log(message);
}

(async () => {
  await trainnlp(nlpManager, say);
  say('Say something!');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  rl.on('line', async line => {
    if (line.toLowerCase() === 'quit') {
      rl.close();
      process.exit();
    } else {
      const result = await nlpManager.process(line);
      const answer =
        result.score > threshold && result.answer
          ? result.answer
          : "Sorry, I don't understand";
      let sentiment = '';
      if (result.sentiment.score !== 0) {
        sentiment = `  ${result.sentiment.score > 0 ? ':)' : ':('}   (${
          result.sentiment.score
        })`;
      }
      say(`bot> ${answer}${sentiment}`);
    }
  });
})();