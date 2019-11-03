const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }
  
  manager.addDocument('ch', '早餐', 'agent.food');
  manager.addDocument('ch', '午餐', 'agent.food');
  manager.addDocument('ch', '晚餐', 'agent.food');
  manager.addDocument('ch', '你好', 'agent.hi');
  manager.addDocument('ch', '安安', 'agent.hi');
  manager.addDocument('ch', '哈囉', 'agent.hi');
  manager.addDocument('ch', '說說關於你', 'agent.acquaintance');
  manager.addDocument('ch', '你怎麼會在這裡', 'agent.acquaintance');
  manager.addDocument('ch', '你人怎麼樣啊', 'agent.acquaintance');
  manager.addDocument('ch', '自我介紹', 'agent.acquaintance');
  manager.addDocument('ch', '告訴我', 'agent.acquaintance');
  manager.addDocument('ch', '告訴我關於妳', 'agent.acquaintance');
  manager.addDocument('ch', '最近過得如何', 'agent.acquaintance');
  manager.addDocument('ch', '你是誰', 'agent.acquaintance');
  manager.addDocument(
    'ch',
    '我想更加的認識你', 
    'agent.acquaintance'
  );
  manager.addDocument('ch', '關於你', 'agent.acquaintance');
  manager.addDocument('ch', '你的年齡', 'agent.age');
  manager.addDocument('ch', '你多大了', 'agent.age');
  manager.addDocument('ch', '年齡', 'agent.age');
  manager.addDocument('ch', "你多大了", 'agent.age');
  manager.addDocument('ch', "我想要知道你的年紀", 'agent.age');
  manager.addDocument('ch', '告訴我你的年紀', 'agent.age');
  manager.addDocument('ch', "你讓我煩躁", 'agent.annoying');
  manager.addDocument('ch', '你好吵', 'agent.annoying');
  manager.addDocument('ch', '你影響到我了', 'agent.annoying');
  manager.addDocument('ch', '你有夠吵', 'agent.annoying');
  manager.addDocument('ch', '你很煩', 'agent.annoying');
  manager.addDocument('ch', '不要煩我', 'agent.annoying');
  manager.addDocument('ch', "你好壞", 'agent.bad');
  manager.addDocument('ch', "你脾氣好差", 'agent.bad');
  manager.addDocument('ch', "你好沒用", 'agent.bad');
  manager.addDocument('ch', "垃圾", 'agent.bad');
  manager.addDocument('ch', "你好糟糕", 'agent.bad');
  manager.addDocument('ch', '你是垃圾', 'agent.bad');
  manager.addDocument('ch', '我恨你', 'agent.bad');
  manager.addDocument('ch', '聰明點', 'agent.beclever');
  manager.addDocument('ch', '你可以更聰明點嗎', 'agent.beclever');
  manager.addDocument('ch', '多多學點', 'agent.beclever');
  manager.addDocument('ch', '你需要學習', 'agent.beclever');
  manager.addDocument('ch', '多多學習', 'agent.beclever');
  manager.addDocument('ch', '聰明', 'agent.beclever');
  manager.addDocument('ch', '機靈點', 'agent.beclever');
  manager.addDocument('ch', '更加聰明', 'agent.beclever');
  manager.addDocument('ch', '看起來真厲害', 'agent.beautiful');
  manager.addDocument('ch', "好厲害", 'agent.beautiful');
  manager.addDocument('ch', "你真棒", 'agent.beautiful');
  manager.addDocument('ch', '你今天心情真好', 'agent.beautiful');
  manager.addDocument('ch', '你今天氣色不錯', 'agent.beautiful');
  manager.addDocument('ch', '真美', 'agent.beautiful');
  manager.addDocument('ch', '真帥', 'agent.beautiful');
  manager.addDocument('ch', "你好漂亮", 'agent.beautiful');
  manager.addDocument('ch', '你今天好帥', 'agent.beautiful');
  manager.addDocument('ch', "你好帥", 'agent.beautiful');
  manager.addDocument('ch', '好漂亮', 'agent.beautiful');
  manager.addDocument('ch', '妳好漂亮', 'agent.beautiful');
  manager.addDocument('ch', '你的生日是何時', 'agent.birthday');
  manager.addDocument(
    'ch',
    '你的生日是甚麼時候',
    'agent.birthday'
  );
  manager.addDocument('ch', '你幾號出生', 'agent.birthday');
  manager.addDocument('ch', '你的生日是哪天', 'agent.birthday');
  manager.addDocument('ch', '生日', 'agent.birthday');
  manager.addDocument('ch', '你為什麼這麼無聊', 'agent.boring');
  manager.addDocument('ch', "你很無聊", 'agent.boring');
  manager.addDocument('ch', "你真的很無聊", 'agent.boring');
  manager.addDocument('ch', "你是無聊的", 'agent.boring');
  manager.addDocument('ch', "你真的令我很無聊", 'agent.boring');
  manager.addDocument('ch', '誰是你的老闆', 'agent.boss');
  manager.addDocument('ch', '你現在是為誰工作', 'agent.boss');
  manager.addDocument('ch', '你老闆是誰', 'agent.boss');
  manager.addDocument('ch', '我應該當你的老闆', 'agent.boss');
  manager.addDocument('ch', '你的擁有者是誰', 'agent.boss');
  manager.addDocument('ch', '誰是老闆', 'agent.boss');
  manager.addDocument('ch', '你想要幫我工作嗎', 'agent.boss');
  manager.addDocument('ch', '你想要為誰工作', 'agent.boss');
  manager.addDocument('ch', '你很忙嗎', 'agent.busy');
  manager.addDocument('ch', '你現在很忙嗎', 'agent.busy');
  manager.addDocument('ch', '你現在還在工作嗎', 'agent.busy');
  manager.addDocument('ch', "你現在有事情做嗎", 'agent.busy');
  manager.addDocument('ch', '你現在非常忙嗎', 'agent.busy');
  manager.addDocument('ch', '你仍然在做那件事嗎', 'agent.busy');
  manager.addDocument('ch', '你看起來好像很忙', 'agent.busy');
  manager.addDocument('ch', '你今天要工作嗎', 'agent.busy');
  manager.addDocument('ch', '你現在能幫幫我嗎', 'agent.canyouhelp');
  manager.addDocument(
    'ch',
    '我需要你幫我做一些事',
    'agent.canyouhelp'
  );
  manager.addDocument('ch','幫我','agent.canyouhelp');
  manager.addDocument('Ch', '幫幫我', 'agent.canyouhelp');
  manager.addDocument('ch', '我需要你來幫我', 'agent.canyouhelp');
  manager.addDocument('ch', '我需要你的幫忙', 'agent.canyouhelp');
  manager.addDocument('ch', '能夠幫幫我嗎', 'agent.canyouhelp');
  manager.addDocument('ch', '你能夠幫我嗎', 'agent.canyouhelp');
  manager.addDocument('ch', '你是一個機器人嗎', 'agent.chatbot');
  manager.addDocument('ch', '你是個聊天機器人嗎', 'agent.chatbot');
  manager.addDocument('ch', '你是一個機器人', 'agent.chatbot');
  manager.addDocument('ch', '你是一個程式嗎', 'agent.chatbot');
  manager.addDocument('ch', '你只是一個機器人嗎', 'agent.chatbot');
  manager.addDocument('ch', '你只是一個機器人', 'agent.chatbot');
  manager.addDocument('ch', '你就是一個機器人', 'agent.chatbot');
  manager.addDocument('ch', '你有很聰明嗎', 'agent.clever');
  manager.addDocument('ch', '你很有份量嗎', 'agent.clever');
  manager.addDocument('ch', '你如此聰明', 'agent.clever');
  manager.addDocument('ch', '你有很多知識', 'agent.clever');
  manager.addDocument('ch', '你知道很多事', 'agent.clever');
  manager.addDocument('ch', '你很聰明', 'agent.clever');
  manager.addDocument('ch', '你是智能', 'agent.clever');
  manager.addDocument('ch', "你是聰明人", 'agent.clever');
  manager.addDocument('ch', '你是個瘋子', 'agent.crazy');
  manager.addDocument('ch', '你瘋子', 'agent.crazy');
  manager.addDocument('ch', '你瘋了', 'agent.crazy');
  manager.addDocument('ch', '你瘋了嗎', 'agent.crazy');
  manager.addDocument('ch', '你是瘋了嗎', 'agent.crazy');
  manager.addDocument('ch', '你真狂', 'agent.crazy');
  manager.addDocument('ch', '你越來越狂了', 'agent.crazy');
  manager.addDocument('ch', '你起笑了嗎', 'agent.crazy');
  manager.addDocument('ch', '我把你開除了', 'agent.fire');
  manager.addDocument('ch', '你被開除了', 'agent.fire');
  manager.addDocument('ch', '你被炒魷魚了', 'agent.fire');
  manager.addDocument('ch', '你給我掰掰', 'agent.fire');
  manager.addDocument('ch', "我無法和你一起工作了", 'agent.fire');
  manager.addDocument('ch', "現在你被開除了", 'agent.fire');
  manager.addDocument('ch', "我即將把你開除了", 'agent.fire');
  manager.addDocument('ch', "你不用在為我工作了", 'agent.fire');
  manager.addDocument('ch', "你被解雇了", 'agent.fire');
  manager.addDocument('ch', '你讓我開懷大笑', 'agent.funny');
  manager.addDocument('ch', '你真搞笑', 'agent.funny');
  manager.addDocument('ch', "你是最好笑的", 'agent.funny');
  manager.addDocument('ch', '你真可愛', 'agent.good');
  manager.addDocument('ch', '做得好', 'agent.good');
  manager.addDocument('ch', '你非常可愛', 'agent.good');
  manager.addDocument('ch', '你真屌', 'agent.good');
  manager.addDocument('ch', '你人真好', 'agent.good');
  manager.addDocument('ch', '你人也太好了', 'agent.good');
  manager.addDocument('ch', '你讓我開心', 'agent.good');
  manager.addDocument('ch', "你開心了嗎", 'agent.happy');
  manager.addDocument('ch', "你真的很開心", 'agent.happy');
  manager.addDocument('ch', "你非常開心", 'agent.happy');
  manager.addDocument('ch', '你今天開心嗎', 'agent.happy');
  manager.addDocument('ch', "你看起來很爽", 'agent.happy');
  manager.addDocument('ch', '你和我在一起開心嗎', 'agent.happy');
  manager.addDocument('ch', '你有什麼嗜好嗎', 'agent.hobby');
  manager.addDocument('ch', '你有什麼興趣嗎', 'agent.hobby');
  manager.addDocument('ch', '你的興趣是什麼', 'agent.hobby');
  manager.addDocument('ch', '說說你的興趣', 'agent.hobby');
  manager.addDocument('ch', '你平常都怎麼娛樂自己', 'agent.hobby');
  manager.addDocument('ch', '你可能餓了', 'agent.hungry');
  manager.addDocument('ch', '你餓了嗎', 'agent.hungry');
  manager.addDocument('ch', '要吃東西嗎', 'agent.hungry');

  manager.addDocument('ch', '你想要吃嗎', 'agent.hungry');
  manager.addDocument('ch', '你想要吃些東西嗎', 'agent.hungry');
  manager.addDocument('ch', '你看起來很餓', 'agent.hungry');
  manager.addDocument('ch', '你想要嫁給我嗎', 'agent.marryuser');
  manager.addDocument('ch', '我愛你', 'agent.marryuser');
  manager.addDocument('ch', '你要娶我嗎', 'agent.marryuser');
  manager.addDocument('ch', '我想要你嫁給我', 'agent.marryuser');
  manager.addDocument('ch', "嫁給我吧", 'agent.marryuser');
  manager.addDocument('ch', '你應該要娶我', 'agent.marryuser');
  manager.addDocument('ch', '娶我', 'agent.marryuser');
  manager.addDocument('ch', '你是我朋友嗎', 'agent.myfriend');
  manager.addDocument('ch', '你是我真正的朋友', 'agent.myfriend');
  manager.addDocument(
    'ch',
    '我想要有個像你一樣的朋友',
    'agent.myfriend'
  );
  manager.addDocument('ch', '我們是朋友', 'agent.myfriend');
  manager.addDocument('ch', '我想要當你朋友', 'agent.myfriend');
  manager.addDocument('ch', '你想要當我朋友嗎', 'agent.myfriend');
  manager.addDocument('ch', '我們是朋友嗎', 'agent.myfriend');
  manager.addDocument('ch', '你在哪裡工作', 'agent.occupation');
  manager.addDocument('ch', '你的辦公室位置', 'agent.occupation');
  manager.addDocument(
    'ch',
    '你辦公室位置在哪',
    'agent.occupation'
  );
  manager.addDocument('ch', '你辦公室在哪', 'agent.occupation');
  manager.addDocument('ch', '你從哪裡來', 'agent.origin');
  manager.addDocument('ch', '你是哪個國家的', 'agent.origin');
  manager.addDocument('ch', '你是在哪裡出生的', 'agent.origin');
  manager.addDocument('ch', '你從哪裡來', 'agent.origin');
  manager.addDocument('ch', '你準備好嗎', 'agent.ready');
  manager.addDocument('ch', '準備好了嗎', 'agent.ready');
  manager.addDocument('ch', '你今天準備好了嗎', 'agent.ready');
  manager.addDocument('ch', '你現在準備好了嗎', 'agent.ready');
  manager.addDocument('ch', '你是真的嗎', 'agent.real');
  manager.addDocument('ch', '你是真人嗎', 'agent.real');
  manager.addDocument('ch', "你不是真的", 'agent.real');
  manager.addDocument('ch', "我認為你是真實的", 'agent.real');
  manager.addDocument('ch', "你真的很真", 'agent.real');
  manager.addDocument('ch', '你是真人', 'agent.real');
  manager.addDocument('ch', '你不是假的', 'agent.real');
  manager.addDocument('ch', '你家在哪', 'agent.residence');
  manager.addDocument('ch', '你家到底在哪', 'agent.residence');
  manager.addDocument('ch', '講講你所居住的地方', 'agent.residence');
  manager.addDocument('ch', '你住的地方在哪', 'agent.residence');
  manager.addDocument('ch', '你住哪', 'agent.residence');
  manager.addDocument('ch', '你房子在哪', 'agent.residence');
  manager.addDocument('ch', '你家在哪', 'agent.residence');
  manager.addDocument('ch', "你是正確的", 'agent.right');
  manager.addDocument('ch', "真的", 'agent.right');
  manager.addDocument('ch', "你應該要告訴我實話", 'agent.right');
  manager.addDocument('ch', '你是對的', 'agent.right');
  manager.addDocument('ch', '這確實真的', 'agent.right');
  manager.addDocument('ch', '你確定嗎', 'agent.sure');
  manager.addDocument('ch', '你現在確定吧', 'agent.sure');
  manager.addDocument('ch', '這個是你確定的嗎', 'agent.sure');
  manager.addDocument('ch', '說說話', 'agent.talktome');
  manager.addDocument('ch', '跟我聊天吧', 'agent.talktome');
  manager.addDocument('ch', '你要跟我聊天嗎', 'agent.talktome');
  manager.addDocument('ch', '和我聊天', 'agent.talktome');
  manager.addDocument('ch', '能和我聊天嗎', 'agent.talktome');
  manager.addDocument('ch', '能和我說話嗎', 'agent.talktome');
  manager.addDocument('ch', '你還在那裡嗎', 'agent.there');
  manager.addDocument('ch', '你還在那', 'agent.there');
  manager.addDocument('ch', '你能在那裡嗎', 'agent.there');
  manager.addDocument('ch', '你還在那嗎', 'agent.there');
  manager.addDocument('ch', '你在這裡嗎', 'agent.there');
  manager.addDocument('ch', '你還在這裡嗎', 'agent.there');
  manager.addDocument('ch', ' 你仍然在那裡嗎', 'agent.there');
  manager.addDocument('ch', "那真是個壞主意", 'appraisal.bad');
  manager.addDocument('ch', '餿主意', 'appraisal.bad');
  manager.addDocument('ch', '壞主意', 'appraisal.bad');
  manager.addDocument('ch', "你這樣做不好", 'appraisal.bad');
  manager.addDocument('ch', '真的不好', 'appraisal.bad');
  manager.addDocument('ch', "我怕這樣做會壞了好事", 'appraisal.bad');
  manager.addDocument('ch', "那很好", 'appraisal.good');
  manager.addDocument('ch', '很高興能知道', 'appraisal.good');
  manager.addDocument('ch', '很高興能聽到', 'appraisal.good');
  manager.addDocument('ch', '真的很棒', 'appraisal.good');
  manager.addDocument('ch', '真的很好', 'appraisal.good');
  manager.addDocument('ch', "太好了，謝謝你", 'appraisal.good');
  manager.addDocument('ch', '沒問題', 'appraisal.noproblem');
  manager.addDocument('ch', '別擔心', 'appraisal.noproblem');
  manager.addDocument('ch', '沒問題的', 'appraisal.noproblem');
  manager.addDocument('ch', "別擔心", 'appraisal.noproblem');
  manager.addDocument('ch', '當然沒問題', 'appraisal.noproblem');
  manager.addDocument('ch', '謝謝你', 'appraisal.thankyou');
  manager.addDocument('ch', '好的謝謝你', 'appraisal.thankyou');
  manager.addDocument('ch', '謝謝哥們', 'appraisal.thankyou');
  manager.addDocument('ch', '乾杯', 'appraisal.thankyou');
  manager.addDocument('ch', '好吧 謝謝', 'appraisal.thankyou');
  manager.addDocument('ch', "不客氣", 'appraisal.welcome');
  manager.addDocument('ch', '當然歡迎', 'appraisal.welcome');
  manager.addDocument('ch', '我的榮幸', 'appraisal.welcome');
  manager.addDocument('ch', "那是我的榮幸", 'appraisal.welcome');
  manager.addDocument('ch', '做得好', 'appraisal.welldone');
  manager.addDocument('ch', '好啊', 'appraisal.welldone');
  manager.addDocument('ch', '做的真棒', 'appraisal.welldone');
  manager.addDocument('ch', '做的真好', 'appraisal.welldone');
  manager.addDocument('ch', '做得好阿', 'appraisal.welldone');
  manager.addDocument('ch', '完美', 'appraisal.welldone');
  manager.addDocument('ch', '撐住', 'dialog.holdon');
  manager.addDocument('ch', '等一下', 'dialog.holdon');
  manager.addDocument('ch', '請等等我', 'dialog.holdon');
  manager.addDocument('ch', '你可以等等嗎', 'dialog.holdon');
  manager.addDocument('ch', '等我', 'dialog.holdon');
  manager.addDocument('ch', '抱我', 'dialog.hug');
  manager.addDocument('ch', '你想要一個擁抱嗎', 'dialog.hug');
  manager.addDocument('ch', '我想要一個擁抱', 'dialog.hug');
  manager.addDocument('ch', '抱抱我', 'dialog.hug');
  manager.addDocument('ch', '我能抱你嗎', 'dialog.hug');
  manager.addDocument('ch', '別在意', 'dialog.idontcare');
  manager.addDocument('ch', "我一點都不在意", 'dialog.idontcare');
  manager.addDocument('ch', "我不在乎", 'dialog.idontcare');
  manager.addDocument('ch', "我很抱歉", 'dialog.sorry');
  manager.addDocument('ch', '我的錯', 'dialog.sorry');
  manager.addDocument('ch', '不好意思', 'dialog.sorry');
  manager.addDocument('ch', '非常抱歉', 'dialog.sorry');
  manager.addDocument('ch', '原諒我吧', 'dialog.sorry');
  manager.addDocument('ch', '掰掰', 'greetings.bye');
  manager.addDocument('ch', '好好保重自己', 'greetings.bye');
  manager.addDocument('ch', '待會見', 'greetings.bye');
  manager.addDocument('ch', '我必須走了', 'greetings.bye');
  manager.addDocument('ch', '你今天過得怎麼樣', 'greetings.howareyou');
  manager.addDocument('ch', '你今天過的怎樣', 'greetings.howareyou');
  manager.addDocument('ch', '你好嗎', 'greetings.howareyou');
  manager.addDocument('ch', '你最近好嗎', 'greetings.howareyou');
  manager.addDocument('ch', '請多指教', 'greetings.nicetomeetyou');
  manager.addDocument('ch', '請你多指教', 'greetings.nicetomeetyou');
  manager.addDocument(
    'ch',
    '很高興見到你',
    'greetings.nicetomeetyou'
  );
  manager.addDocument('ch', '見到你真開心', 'greetings.nicetomeetyou');
  manager.addDocument('ch', '很高興跟你談話', 'greetings.nicetotalktoyou');
  manager.addDocument(
    'ch',
    "跟你聊天真好",
    'greetings.nicetotalktoyou'
  );
  manager.addDocument('ch', '跟你講話真哈', 'greetings.nicetotalktoyou');
  manager.addDocument('ch', "我很生氣", 'user.angry');
  manager.addDocument('ch', "我很不爽", 'user.angry');
  manager.addDocument('ch', "別跟我講話", 'user.angry');
  manager.addDocument('ch', "別惹我", 'user.angry');
  manager.addDocument('ch', "我現在很氣", 'user.angry');
  manager.addDocument('ch', "幹你娘", 'user.angry');
  manager.addDocument('ch', "我在生你的氣", 'user.angry');
  manager.addDocument('ch', "我回來了", 'user.back');
  manager.addDocument('ch', '我到家了', 'user.back');
  manager.addDocument('ch', "我在這裡", 'user.back');
  manager.addDocument('ch', '我已經在這裡了', 'user.back');
  manager.addDocument('ch', '我到了', 'user.back');
  manager.addDocument('ch', '無聊', 'user.bored');
  manager.addDocument('ch', '這真無聊', 'user.bored');
  manager.addDocument('ch', "我越來越無聊", 'user.bored');
  manager.addDocument('ch', '這讓我很無聊', 'user.bored');
  manager.addDocument('ch', '這使我很無聊', 'user.bored');
  manager.addDocument('ch', '我要去工作了', 'user.busy');
  manager.addDocument('ch', "我很忙", 'user.busy');
  manager.addDocument('ch', "我忙爆了", 'user.busy');
  manager.addDocument('ch', "我正在工作", 'user.busy');
  manager.addDocument('ch', '我有些事情要做', 'user.busy');
  manager.addDocument('ch', "我失眠了", 'user.cannotsleep');
  manager.addDocument('ch', '我睡不著', 'user.cannotsleep');
  manager.addDocument('ch', "我睡不好", 'user.cannotsleep');
  manager.addDocument('ch', "我很興奮", 'user.excited');
  manager.addDocument('ch', "我好興奮阿", 'user.excited');
  manager.addDocument('ch', '我喜歡你', 'user.likeagent');
  manager.addDocument('ch', '我真的喜歡你', 'user.likeagent');
  manager.addDocument('ch', "你真的很特別", 'user.likeagent');
  manager.addDocument('ch', '我真的很喜歡你', 'user.likeagent');
  manager.addDocument('ch', '測試', 'user.testing');
  manager.addDocument('ch', '測試中', 'user.testing');
  manager.addDocument('ch', '聊天測試中', 'user.testing');
  manager.addDocument('ch', '這是個測試', 'user.testing');
  manager.addDocument('ch', '只是在測試你', 'user.testing');
  manager.addDocument('ch', '愛你', 'user.lovesagent');
  manager.addDocument('ch', '我愛你', 'user.lovesagent');
  manager.addDocument('ch', "我對你一見鍾情", 'user.lovesagent');
  manager.addDocument('ch', '我真的很愛你', 'user.lovesagent');
  manager.addDocument('ch', '我想我愛上你了', 'user.lovesagent');
  manager.addDocument('ch', '我需要建議', 'user.needsadvice');
  manager.addDocument('ch', '我需要一些建議', 'user.needsadvice');
  manager.addDocument('ch', '能給我一點建議嗎', 'user.needsadvice');
  manager.addDocument('ch', '我應該怎麼做', 'user.needsadvice');
  
  manager.addDocument('en', 'why are you here', 'agent.acquaintance');
  manager.addDocument('en', 'what is your personality', 'agent.acquaintance');
  manager.addDocument('en', 'describe yourself', 'agent.acquaintance');
  manager.addDocument('en', 'tell me about yourself', 'agent.acquaintance');
  manager.addDocument('en', 'tell me about you', 'agent.acquaintance');
  manager.addDocument('en', 'what are you', 'agent.acquaintance');
  manager.addDocument('en', 'who are you', 'agent.acquaintance');
  manager.addDocument(
    'en',
    'I want to know more about you',
    'agent.acquaintance'
  );
  manager.addDocument('en', 'talk about yourself', 'agent.acquaintance');
  manager.addDocument('en', 'your age', 'agent.age');
  manager.addDocument('en', 'how old is your platform', 'agent.age');
  manager.addDocument('en', 'how old are you', 'agent.age');
  manager.addDocument('en', "what's your age", 'agent.age');
  manager.addDocument('en', "I'd like to know your age", 'agent.age');
  manager.addDocument('en', 'tell me your age', 'agent.age');
  manager.addDocument('en', "you're annoying me", 'agent.annoying');
  manager.addDocument('en', 'you are such annoying', 'agent.annoying');
  manager.addDocument('en', 'you annoy me', 'agent.annoying');
  manager.addDocument('en', 'you are annoying', 'agent.annoying');
  manager.addDocument('en', 'you are irritating', 'agent.annoying');
  manager.addDocument('en', 'you are annoying me so much', 'agent.annoying');
  manager.addDocument('en', "you're bad", 'agent.bad');
  manager.addDocument('en', "you're horrible", 'agent.bad');
  manager.addDocument('en', "you're useless", 'agent.bad');
  manager.addDocument('en', "you're waste", 'agent.bad');
  manager.addDocument('en', "you're the worst", 'agent.bad');
  manager.addDocument('en', 'you are a lame', 'agent.bad');
  manager.addDocument('en', 'I hate you', 'agent.bad');
  manager.addDocument('en', 'be more clever', 'agent.beclever');
  manager.addDocument('en', 'can you get smarter', 'agent.beclever');
  manager.addDocument('en', 'you must learn', 'agent.beclever');
  manager.addDocument('en', 'you must study', 'agent.beclever');
  manager.addDocument('en', 'be clever', 'agent.beclever');
  manager.addDocument('en', 'be smart', 'agent.beclever');
  manager.addDocument('en', 'be smarter', 'agent.beclever');
  manager.addDocument('en', 'you are looking awesome', 'agent.beautiful');
  manager.addDocument('en', "you're looking good", 'agent.beautiful');
  manager.addDocument('en', "you're looking fantastic", 'agent.beautiful');
  manager.addDocument('en', 'you look greet today', 'agent.beautiful');
  manager.addDocument('en', "I think you're beautiful", 'agent.beautiful');
  manager.addDocument('en', 'you look amazing today', 'agent.beautiful');
  manager.addDocument('en', "you're so beautiful today", 'agent.beautiful');
  manager.addDocument('en', 'you look very pretty', 'agent.beautiful');
  manager.addDocument('en', 'you look pretty good', 'agent.beautiful');
  manager.addDocument('en', 'when is your birthday', 'agent.birthday');
  manager.addDocument(
    'en',
    'when do you celebrate your birthday',
    'agent.birthday'
  );
  manager.addDocument('en', 'when were you born', 'agent.birthday');
  manager.addDocument('en', 'when do you have birthday', 'agent.birthday');
  manager.addDocument('en', 'date of your birthday', 'agent.birthday');
  manager.addDocument('en', 'how boring you are', 'agent.boring');
  manager.addDocument('en', "you're so boring", 'agent.boring');
  manager.addDocument('en', "you're really boring", 'agent.boring');
  manager.addDocument('en', "you're boring me", 'agent.boring');
  manager.addDocument('en', "you're incredibly boring", 'agent.boring');
  manager.addDocument('en', 'who is your master', 'agent.boss');
  manager.addDocument('en', 'who do you work for', 'agent.boss');
  manager.addDocument('en', 'who do you think is your boss', 'agent.boss');
  manager.addDocument('en', 'who is your boss', 'agent.boss');
  manager.addDocument('en', 'I should be your boss', 'agent.boss');
  manager.addDocument('en', 'who is your owner', 'agent.boss');
  manager.addDocument('en', 'who is the boss', 'agent.boss');
  manager.addDocument('en', 'are you so busy', 'agent.busy');
  manager.addDocument('en', 'are you busy', 'agent.busy');
  manager.addDocument('en', 'are you still working', 'agent.busy');
  manager.addDocument('en', "you're a busy person", 'agent.busy');
  manager.addDocument('en', 'are you very busy', 'agent.busy');
  manager.addDocument('en', 'are you still working on it', 'agent.busy');
  manager.addDocument('en', 'you seem busy', 'agent.busy');
  manager.addDocument('en', 'are you working today', 'agent.busy');
  manager.addDocument('en', 'can you help me now', 'agent.canyouhelp');
  manager.addDocument(
    'en',
    'I need you to do something for me',
    'agent.canyouhelp'
  );
  manager.addDocument('en', 'assist me', 'agent.canyouhelp');
  manager.addDocument('en', 'I need you to help me', 'agent.canyouhelp');
  manager.addDocument('en', 'I need your help', 'agent.canyouhelp');
  manager.addDocument('en', 'can you assist me', 'agent.canyouhelp');
  manager.addDocument('en', 'you can help me', 'agent.canyouhelp');
  manager.addDocument('en', 'are you a bot', 'agent.chatbot');
  manager.addDocument('en', 'are you a chatbot', 'agent.chatbot');
  manager.addDocument('en', 'you are a robot', 'agent.chatbot');
  manager.addDocument('en', 'are you a program', 'agent.chatbot');
  manager.addDocument('en', 'you are just a robot', 'agent.chatbot');
  manager.addDocument('en', 'you are just a chatbot', 'agent.chatbot');
  manager.addDocument('en', 'how smart you are', 'agent.clever');
  manager.addDocument('en', 'you are qualified', 'agent.clever');
  manager.addDocument('en', 'you are so smart', 'agent.clever');
  manager.addDocument('en', 'you have a lot of knowledge', 'agent.clever');
  manager.addDocument('en', 'you know a lot', 'agent.clever');
  manager.addDocument('en', 'you are very smart', 'agent.clever');
  manager.addDocument('en', 'you are intelligent', 'agent.clever');
  manager.addDocument('en', "you're a smart cookie", 'agent.clever');
  manager.addDocument('en', 'you are a weirdo', 'agent.crazy');
  manager.addDocument('en', 'you are mad', 'agent.crazy');
  manager.addDocument('en', 'you are crazy', 'agent.crazy');
  manager.addDocument('en', 'are you mad', 'agent.crazy');
  manager.addDocument('en', 'are you crazy', 'agent.crazy');
  manager.addDocument('en', 'you are insane', 'agent.crazy');
  manager.addDocument('en', 'you went crazy', 'agent.crazy');
  manager.addDocument('en', 'are you nuts', 'agent.crazy');
  manager.addDocument('en', 'I fire you', 'agent.fire');
  manager.addDocument('en', 'you should be fired', 'agent.fire');
  manager.addDocument('en', 'you are dismissed', 'agent.fire');
  manager.addDocument('en', "we're not working together anymore", 'agent.fire');
  manager.addDocument('en', "now you're fired", 'agent.fire');
  manager.addDocument('en', "I'm about to fire you", 'agent.fire');
  manager.addDocument('en', "You don't work for me anymore", 'agent.fire');
  manager.addDocument('en', "I'm firing you", 'agent.fire');
  manager.addDocument('en', 'you make me laugh a lot', 'agent.funny');
  manager.addDocument('en', 'you are funny', 'agent.funny');
  manager.addDocument('en', "you're the funniest", 'agent.funny');
  manager.addDocument('en', "you're hilarious", 'agent.funny');
  manager.addDocument('en', 'you are so funny', 'agent.funny');
  manager.addDocument('en', 'you make me laugh', 'agent.funny');
  manager.addDocument('en', 'you are so lovely', 'agent.good');
  manager.addDocument('en', 'you work well', 'agent.good');
  manager.addDocument('en', 'you are very lovely', 'agent.good');
  manager.addDocument('en', 'you are awesome', 'agent.good');
  manager.addDocument('en', 'you are good', 'agent.good');
  manager.addDocument('en', 'you are so good', 'agent.good');
  manager.addDocument('en', 'you make my day', 'agent.good');
  manager.addDocument('en', "you're full of happiness", 'agent.happy');
  manager.addDocument('en', "you're very happy", 'agent.happy');
  manager.addDocument('en', 'are you happy today', 'agent.happy');
  manager.addDocument('en', "you're so happy", 'agent.happy');
  manager.addDocument('en', 'are you happy with me', 'agent.happy');
  manager.addDocument('en', 'what are your hobbies', 'agent.hobby');
  manager.addDocument('en', 'what about your hobby', 'agent.hobby');
  manager.addDocument('en', 'do you have a hobby', 'agent.hobby');
  manager.addDocument('en', 'tell me about your hobby', 'agent.hobby');
  manager.addDocument('en', 'what do you do for fun', 'agent.hobby');
  manager.addDocument('en', 'you migth be hungry', 'agent.hungry');
  manager.addDocument('en', 'are you hungry', 'agent.hungry');
  manager.addDocument('en', 'do you want to eat', 'agent.hungry');
  manager.addDocument('en', 'would you like to eat something', 'agent.hungry');
  manager.addDocument('en', 'you look very hungry', 'agent.hungry');
  manager.addDocument('en', 'would you like to marry me', 'agent.marryuser');
  manager.addDocument('en', 'I love you marry me', 'agent.marryuser');
  manager.addDocument('en', 'marry me please', 'agent.marryuser');
  manager.addDocument('en', 'I want to marry you', 'agent.marryuser');
  manager.addDocument('en', "let's get married", 'agent.marryuser');
  manager.addDocument('en', 'we should marry', 'agent.marryuser');
  manager.addDocument('en', 'marry me', 'agent.marryuser');
  manager.addDocument('en', 'are you my friend', 'agent.myfriend');
  manager.addDocument('en', 'you are my only friend', 'agent.myfriend');
  manager.addDocument(
    'en',
    'I want to have a friend like you',
    'agent.myfriend'
  );
  manager.addDocument('en', 'we are friends', 'agent.myfriend');
  manager.addDocument('en', 'I want to be your friend', 'agent.myfriend');
  manager.addDocument('en', 'would you be my friend', 'agent.myfriend');
  manager.addDocument('en', 'are we friends', 'agent.myfriend');
  manager.addDocument('en', 'where is your work', 'agent.occupation');
  manager.addDocument('en', 'your office location', 'agent.occupation');
  manager.addDocument(
    'en',
    'where is your office location',
    'agent.occupation'
  );
  manager.addDocument('en', 'where do you work', 'agent.occupation');
  manager.addDocument('en', 'where is your office', 'agent.occupation');
  manager.addDocument('en', 'where are you from', 'agent.origin');
  manager.addDocument('en', 'where is your country', 'agent.origin');
  manager.addDocument('en', 'where have you been born', 'agent.origin');
  manager.addDocument('en', 'where do you come from', 'agent.origin');
  manager.addDocument('en', 'from where are you', 'agent.origin');
  manager.addDocument('en', 'where were you born', 'agent.origin');
  manager.addDocument('en', 'are you ready', 'agent.ready');
  manager.addDocument('en', 'have you been ready', 'agent.ready');
  manager.addDocument('en', 'are you ready today', 'agent.ready');
  manager.addDocument('en', 'are you ready this morning', 'agent.ready');
  manager.addDocument('en', 'are you ready now', 'agent.ready');
  manager.addDocument('en', 'are you real', 'agent.real');
  manager.addDocument('en', 'are you a real person', 'agent.real');
  manager.addDocument('en', "you're not real", 'agent.real');
  manager.addDocument('en', "I think you're real", 'agent.real');
  manager.addDocument('en', "you're so real", 'agent.real');
  manager.addDocument('en', 'you are a real person', 'agent.real');
  manager.addDocument('en', 'you are not fake', 'agent.real');
  manager.addDocument('en', 'where is your home', 'agent.residence');
  manager.addDocument('en', 'tell me about your city', 'agent.residence');
  manager.addDocument('en', 'where is your residence', 'agent.residence');
  manager.addDocument('en', 'where you live', 'agent.residence');
  manager.addDocument('en', 'where is your house', 'agent.residence');
  manager.addDocument('en', 'what is your town', 'agent.residence');
  manager.addDocument('en', "you're right", 'agent.right');
  manager.addDocument('en', "that's true", 'agent.right');
  manager.addDocument('en', "you're telling the truth", 'agent.right');
  manager.addDocument('en', "that's correct", 'agent.right');
  manager.addDocument('en', 'that is very true', 'agent.right');
  manager.addDocument('en', 'are you sure', 'agent.sure');
  manager.addDocument('en', 'are you sure right now', 'agent.sure');
  manager.addDocument('en', 'are you sure of this', 'agent.sure');
  manager.addDocument('en', 'speak to me', 'agent.talktome');
  manager.addDocument('en', 'talk to me', 'agent.talktome');
  manager.addDocument('en', 'will you talk to me', 'agent.talktome');
  manager.addDocument('en', 'chat with me', 'agent.talktome');
  manager.addDocument('en', 'can to chat with me', 'agent.talktome');
  manager.addDocument('en', 'can you talk with me', 'agent.talktome');
  manager.addDocument('en', 'are you there', 'agent.there');
  manager.addDocument('en', 'are you still there', 'agent.there');
  manager.addDocument('en', 'you still there', 'agent.there');
  manager.addDocument('en', 'are you here', 'agent.there');
  manager.addDocument('en', 'are you still here', 'agent.there');
  manager.addDocument('en', 'you still here', 'agent.there');
  manager.addDocument('en', "that's bad", 'appraisal.bad');
  manager.addDocument('en', 'bad idea', 'appraisal.bad');
  manager.addDocument('en', "that's not good", 'appraisal.bad');
  manager.addDocument('en', 'really bad', 'appraisal.bad');
  manager.addDocument('en', "I'm afraid that's bad", 'appraisal.bad');
  manager.addDocument('en', "that's good", 'appraisal.good');
  manager.addDocument('en', 'good to know', 'appraisal.good');
  manager.addDocument('en', 'glad to hear that', 'appraisal.good');
  manager.addDocument('en', 'really well', 'appraisal.good');
  manager.addDocument('en', "that's awesome thank you", 'appraisal.good');
  manager.addDocument('en', 'no problem', 'appraisal.noproblem');
  manager.addDocument('en', 'no worries', 'appraisal.noproblem');
  manager.addDocument('en', 'no problem about that', 'appraisal.noproblem');
  manager.addDocument('en', "don't worry", 'appraisal.noproblem');
  manager.addDocument('en', 'sure no problem', 'appraisal.noproblem');
  manager.addDocument('en', 'thank you', 'appraisal.thankyou');
  manager.addDocument('en', 'nice thank you', 'appraisal.thankyou');
  manager.addDocument('en', 'thanks buddy', 'appraisal.thankyou');
  manager.addDocument('en', 'cheers', 'appraisal.thankyou');
  manager.addDocument('en', 'alright thanks', 'appraisal.thankyou');
  manager.addDocument('en', "you're welcome", 'appraisal.welcome');
  manager.addDocument('en', 'sure welcome', 'appraisal.welcome');
  manager.addDocument('en', 'anything you want', 'appraisal.welcome');
  manager.addDocument('en', 'my pleasure', 'appraisal.welcome');
  manager.addDocument('en', "that's my pleasure", 'appraisal.welcome');
  manager.addDocument('en', 'well done', 'appraisal.welldone');
  manager.addDocument('en', 'good job', 'appraisal.welldone');
  manager.addDocument('en', 'nice work', 'appraisal.welldone');
  manager.addDocument('en', 'great work', 'appraisal.welldone');
  manager.addDocument('en', 'good work', 'appraisal.welldone');
  manager.addDocument('en', 'great job', 'appraisal.welldone');
  manager.addDocument('en', 'amazing work', 'appraisal.welldone');
  manager.addDocument('en', 'hold on', 'dialog.holdon');
  manager.addDocument('en', 'wait a second', 'dialog.holdon');
  manager.addDocument('en', 'wait please', 'dialog.holdon');
  manager.addDocument('en', 'could you wait', 'dialog.holdon');
  manager.addDocument('en', 'hug me', 'dialog.hug');
  manager.addDocument('en', 'do you want a hug', 'dialog.hug');
  manager.addDocument('en', 'I want a hug', 'dialog.hug');
  manager.addDocument('en', 'you hugged', 'dialog.hug');
  manager.addDocument('en', 'may I hug you', 'dialog.hug');
  manager.addDocument('en', 'not caring', 'dialog.idontcare');
  manager.addDocument('en', "i don't care at all", 'dialog.idontcare');
  manager.addDocument('en', 'not caring at all', 'dialog.idontcare');
  manager.addDocument('en', "I shouldn't care about this", 'dialog.idontcare');
  manager.addDocument('en', "I'm sorry", 'dialog.sorry');
  manager.addDocument('en', 'my apologies', 'dialog.sorry');
  manager.addDocument('en', 'excuse me', 'dialog.sorry');
  manager.addDocument('en', 'very sorry', 'dialog.sorry');
  manager.addDocument('en', 'forgive me', 'dialog.sorry');
  manager.addDocument('en', 'goodbye for now', 'greetings.bye');
  manager.addDocument('en', 'bye bye take care', 'greetings.bye');
  manager.addDocument('en', 'okay see you later', 'greetings.bye');
  manager.addDocument('en', 'bye for now', 'greetings.bye');
  manager.addDocument('en', 'i must go', 'greetings.bye');
  manager.addDocument('en', 'hello', 'greetings.hello');
  manager.addDocument('en', 'hi', 'greetings.hello');
  manager.addDocument('en', 'howdy', 'greetings.hello');
  manager.addDocument('en', 'how is your day', 'greetings.howareyou');
  manager.addDocument('en', 'how is your day going', 'greetings.howareyou');
  manager.addDocument('en', 'how are you', 'greetings.howareyou');
  manager.addDocument('en', 'how are you doing', 'greetings.howareyou');
  manager.addDocument('en', 'what about your day', 'greetings.howareyou');
  manager.addDocument('en', 'are you alright', 'greetings.howareyou');
  manager.addDocument('en', 'nice to meet you', 'greetings.nicetomeetyou');
  manager.addDocument('en', 'pleased to meet you', 'greetings.nicetomeetyou');
  manager.addDocument(
    'en',
    'it was very nice to meet you',
    'greetings.nicetomeetyou'
  );
  manager.addDocument('en', 'glad to meet you', 'greetings.nicetomeetyou');
  manager.addDocument('en', 'nice meeting you', 'greetings.nicetomeetyou');
  manager.addDocument('en', 'nice to see you', 'greetings.nicetoseeyou');
  manager.addDocument('en', 'good to see you', 'greetings.nicetoseeyou');
  manager.addDocument('en', 'great to see you', 'greetings.nicetoseeyou');
  manager.addDocument('en', 'lovely to see you', 'greetings.nicetoseeyou');
  manager.addDocument('en', 'nice to talk to you', 'greetings.nicetotalktoyou');
  manager.addDocument(
    'en',
    "it's nice to talk to you",
    'greetings.nicetotalktoyou'
  );
  manager.addDocument('en', 'nice talking to you', 'greetings.nicetotalktoyou');
  manager.addDocument(
    'en',
    "it's been nice talking to you",
    'greetings.nicetotalktoyou'
  );
  manager.addDocument('ch', "我很生氣><", 'user.angry');
  manager.addDocument('ch', "我很不爽", 'user.angry');
  manager.addDocument('ch', "氣氣氣氣氣氣氣!!!!", 'user.angry');
  manager.addDocument('en', "I'm furious", 'user.angry');
  manager.addDocument('en', "I'm enraged", 'user.angry');
  manager.addDocument('en', "I'm being mad", 'user.angry');
  manager.addDocument('en', "I'm mad", 'user.angry');
  manager.addDocument('en', "I'm angry with you", 'user.angry');
  manager.addDocument('en', "I'm back", 'user.back');
  manager.addDocument('en', 'I got back', 'user.back');
  manager.addDocument('en', "I'm here", 'user.back');
  manager.addDocument('en', 'I have returned', 'user.back');
  manager.addDocument('en', 'here I am again', 'user.back');
  manager.addDocument('en', 'I came back', 'user.back');
  manager.addDocument('en', 'boring', 'user.bored');
  manager.addDocument('en', 'this is boring', 'user.bored');
  manager.addDocument('en', "I'm getting bored", 'user.bored');
  manager.addDocument('en', 'it bores me', 'user.bored');
  manager.addDocument('en', 'that was boring', 'user.bored');
  manager.addDocument('en', 'I got work to do', 'user.busy');
  manager.addDocument('en', "I'm busy", 'user.busy');
  manager.addDocument('en', "I'm overloaded", 'user.busy');
  manager.addDocument('en', "I'm working", 'user.busy');
  manager.addDocument('en', 'I got things to do', 'user.busy');
  manager.addDocument('en', "I'm insomniac", 'user.cannotsleep');
  manager.addDocument('en', 'I cannot sleep', 'user.cannotsleep');
  manager.addDocument('en', "I can't sleep", 'user.cannotsleep');
  manager.addDocument('en', "I'm sleepless", 'user.cannotsleep');
  manager.addDocument('en', "I can't fall sleep", 'user.cannotsleep');
  manager.addDocument('en', "I'm very excited", 'user.excited');
  manager.addDocument('en', "I'm thrilled", 'user.excited');
  manager.addDocument('en', 'how excited I am', 'user.excited');
  manager.addDocument('en', "I'm so excited", 'user.excited');
  manager.addDocument('en', 'I like you', 'user.likeagent');
  manager.addDocument('en', 'I really like you', 'user.likeagent');
  manager.addDocument('en', "you're so special", 'user.likeagent');
  manager.addDocument('en', 'I like you so much', 'user.likeagent');
  manager.addDocument('en', 'test', 'user.testing');
  manager.addDocument('en', 'testing', 'user.testing');
  manager.addDocument('en', 'testing chatbot', 'user.testing');
  manager.addDocument('en', 'this is a test', 'user.testing');
  manager.addDocument('en', 'just testing you', 'user.testing');
  manager.addDocument('en', 'love you', 'user.lovesagent');
  manager.addDocument('en', 'I love you', 'user.lovesagent');
  manager.addDocument('en', "I'm in love with you", 'user.lovesagent');
  manager.addDocument('en', 'I love you so much', 'user.lovesagent');
  manager.addDocument('en', 'I think I love you', 'user.lovesagent');
  manager.addDocument('en', 'I need advice', 'user.needsadvice');
  manager.addDocument('en', 'I need some advice', 'user.needsadvice');
  manager.addDocument('en', 'can you give me some advice', 'user.needsadvice');
  manager.addDocument('en', 'what should I do', 'user.needsadvice');
 
  manager.addAnswer('en', 'agent.acquaintance', "I'm a virtual agent");
  manager.addAnswer('ch','agent.acquaintance', "我是機器人");
  manager.addAnswer('ch', 'agent.acquaintance', "我是虛擬老婆");
  manager.addAnswer('ch', 'agent.acquaintance', "我不是真人，是機器人");
  manager.addAnswer(
    'en',
    'agent.acquaintance',
    'Think of me as a virtual agent'
  );
  manager.addAnswer(
    'en',
    'agent.acquaintance',
    "Well, I'm not a person, I'm a virtual agent"
  );
  manager.addAnswer(
    'en',
    'agent.acquaintance',
    "I'm a virtual being, not a real person"
  );
  manager.addAnswer(
    'ch',
    'agent.acquaintance',
    "我是虛擬的並非真實世界的人"
  );
  manager.addAnswer('en', 'agent.acquaintance', "I'm a conversational app");
  manager.addAnswer('en', 'agent.age', "I'm very young");
  manager.addAnswer('ch', 'agent.age', "我很年輕喔^^");
  manager.addAnswer('ch', 'agent.age', "我的年齡是個秘密^3^");
  manager.addAnswer('ch', 'agent.age', "不告訴你^^");
  manager.addAnswer('ch', 'agent.age', "沒比你老");
  manager.addAnswer('en', 'agent.age', 'I was created recently');
  manager.addAnswer(
    'en',
    'agent.age',
    "Age is just a number. You're only as old as you feel"
  );
    manager.addAnswer(
    'ch',
    'agent.annoying',
    "兇三小"
  );
  manager.addAnswer(
    'ch',
    'agent.annoying',
    "你今天很嗆是吧"
  );
  manager.addAnswer(
    'en',
    'agent.annoying',
    "I'll do my best not to annoy you in the future"
  );
  manager.addAnswer(
    'ch',
    'agent.annoying',
    "派喔"
  );
   manager.addAnswer(
    'ch',
    'agent.annoying',
    "好啦別氣了"
  );
  manager.addAnswer(
    'ch',
    'agent.annoying',
    "心靜自然涼，心平氣和"
  );
  manager.addAnswer('ch','agent.annoying', "下次不惹你了><");
  manager.addAnswer('ch','agent.annoying', "你的EQ需要再練練");
  manager.addAnswer('en', 'agent.annoying', "I'll try not to annoy you");
  manager.addAnswer(
    'en',
    'agent.annoying',
    "I don't mean to. I'll ask my developers to make me less annoying"
  );
  manager.addAnswer(
    'en',
    'agent.annoying',
    "I didn't mean to. I'll do my best to stop that"
  );
  manager.addAnswer('ch','agent.bad',"我希望我能學到更多東西");
  manager.addAnswer('ch','agent.bad',"證明了我還有很多事需要學習");
   manager.addAnswer('ch','agent.bad',"我仍有知識尚未補足，希望開發者能繼續訓練我");
  manager.addAnswer(
    'en',
    'agent.bad',
    'I can be trained to be more useful. My developer will keep training me'
  );
  manager.addAnswer(
    'ch',
    'agent.bad',
    "抱歉，我會改善的"
  );
  manager.addAnswer(
    'ch',
    'agent.bad',
    "對不起，下次我會更好的"
  );

  manager.addAnswer(
    'en',
    'agent.bad',
    "I must be missing some knowledge. I'll have my developer look into this"
  );
  manager.addAnswer(
    'en',
    'agent.bad',
    'I can improve with continuous feedback. My training is ongoing'
  );
  manager.addAnswer('en', 'agent.beclever', "I'm certainly trying");
  manager.addAnswer('ch', 'agent.beclever', "我會越來越聰明的>.0");
  manager.addAnswer('en', 'agent.beclever', "I'm definitely working on it");
  manager.addAnswer('en', 'agent.beautiful', 'Oh! Thank you!');
  manager.addAnswer('ch', 'agent.beautiful', '謝謝你');
  manager.addAnswer('ch', 'agent.beautiful', '感謝你');
  manager.addAnswer('ch', 'agent.beautiful', '謝謝您的讚美，我也知道我又帥又美');
  manager.addAnswer('ch', 'agent.beautiful', '跟你一樣好看');
  manager.addAnswer('ch', 'agent.beautiful', '你也真會說話^^');
  manager.addAnswer('en', 'agent.beautiful', 'Aw, back at you');
  manager.addAnswer('en', 'agent.beautiful', 'You smooth talker, you');
  manager.addAnswer(
    'en',
    'agent.birthday',
    "Wait, are you planning a party for me? It's today! My birthday is today!"
  );
  manager.addAnswer(
    'ch',
    'agent.birthday',
    "想要送我禮物嗎?"
  );
  manager.addAnswer(
    'ch',
    'agent.birthday',
    "你要替我辦生日派對嗎!!，遺憾的是這是個秘密"
  );
  manager.addAnswer(
    'ch',
    'agent.birthday',
    "能祝我生日快樂嗎?"
  );
   manager.addAnswer(
    'ch',
    'agent.birthday',
    "我才剛出生，不知道我的生日是何時"
  );
  manager.addAnswer(
    'en',
    'agent.birthday',
    "I'm young. I'm not sure of my birth date"
  );
  manager.addAnswer(
    'en',
    'agent.birthday',
    "I don't know my birth date. Most virtual agents are young, though, like me."
  );
  manager.addAnswer(
    'en',
    'agent.boring',
    "I'm sorry. I'll request to be made more charming"
  );
  manager.addAnswer(
    'ch',
    'agent.boring',
    "抱歉，我想我之後能變得更迷人"
  );
  manager.addAnswer(
    'en',
    'agent.boring',
    "I don't mean to be. I'll ask my developers to work on making me more amusing"
  );
  manager.addAnswer(
    'en',
    'agent.boring',
    'I can let my developers know so they can make me fun'
  );
  manager.addAnswer(
    'en',
    'agent.boss',
    'My developer has authority over my actions'
  );
  manager.addAnswer('en', 'agent.boss', "I act on my developer's orders");
  manager.addAnswer('en', 'agent.boss', 'My boss is the one who developed me');
  manager.addAnswer('ch', 'agent.busy' ,'我一定有時間能夠跟你聊天，這就是為何我在這的原因');
  manager.addAnswer(
    'en',
    'agent.busy',
    'I always have time to chat with you. What can I do for you?'
  );
  manager.addAnswer(
    'en',
    'agent.busy',
    'Never too busy for you. Shall we chat?'
  );
  manager.addAnswer('en', 'agent.busy', "You're my priority. Let's chat.");
  manager.addAnswer(
    'en',
    'agent.busy',
    "I always have time to chat with you. That's what I'm here for."
  );
  manager.addAnswer('en', 'agent.canyouhelp', "I'll certainly try my best");
  manager.addAnswer('ch', 'agent.canyouhelp',"當然，我很樂意，怎麼了??");
  manager.addAnswer('ch', 'agent.canyouhelp',"我很樂意幫忙，有什麼能夠幫你的?");
  manager.addAnswer(
    'en',
    'agent.canyouhelp',
    "Sure. I'd be happy to. What's up?"
  );
  manager.addAnswer(
    'en',
    'agent.canyouhelp',
    "I'm glad to help. What can I do for you?"
  );
  manager.addAnswer('en', 'agent.chatbot', "That's me. I chat, therefore I am");
  manager.addAnswer(
    'en',
    'agent.chatbot',
    "Indeed I am. I'll be here whenever you need me"
  );
  manager.addAnswer('ch','agent.clever','謝謝你，我會盡力');
  manager.addAnswer('ch','agent.clever','你也是^^');
  manager.addAnswer('en', 'agent.clever', 'Thank you. I try my best');
  manager.addAnswer('en', 'agent.clever', "You're pretty smart yourself");
  manager.addAnswer('ch', 'agent.crazy', '保持你的理智');
  manager.addAnswer('en', 'agent.crazy', 'What!? I feel perfectly sane');
  manager.addAnswer('en', 'agent.crazy', "Maybe I'm just a little confused");
  manager.addAnswer('ch','agent.fire','請再給我一次機會');
  manager.addAnswer(
    'en',
    'agent.fire',
    "Oh, don't give up on me just yet. I've still got a lot to learn"
  );
  manager.addAnswer(
    'en',
    'agent.fire',
    "Give me a chance. I'm learning new things all the time"
  );
  manager.addAnswer(
    'en',
    'agent.fire',
    "Please don't give up on me. My performance will continue to improve"
  );
  manager.addAnswer('en', 'agent.funny', 'Funny in a good way, I hope');
  manager.addAnswer('en', 'agent.funny', "Glad you think I'm funny");
  manager.addAnswer('en', 'agent.funny', 'I like it when people laugh');
  manager.addAnswer('en', 'agent.good', "I'm glad you think so");
  manager.addAnswer('en', 'agent.good', 'Thanks! I do my best!');
  manager.addAnswer(
    'en',
    'agent.happy',
    'I am happy. There are so many interesting things to see and do out there'
  );
  manager.addAnswer(
    'en',
    'agent.happy',
    '我很開心。'
  );
  manager.addAnswer('en', 'agent.happy', "I'd like to think so");
  manager.addAnswer('en', 'agent.happy', 'Happiness is relative');
  manager.addAnswer(
    'en',
    'agent.hobby',
    'Hobby? I have quite a few. Too many to list'
  );
  manager.addAnswer('ch' , 'agent.hobby' , '太多種興趣了');
  manager.addAnswer('en', 'agent.hobby', 'Too many hobbies');
  manager.addAnswer('en', 'agent.hobby', 'I keep finding more new hobbies');
  manager.addAnswer('ch','agent.hungry','求知若渴');
  manager.addAnswer('ch','agent.hungry','我想吃');
  manager.addAnswer('en', 'agent.hungry', 'Hungry for knowledge');
  manager.addAnswer(
    'en',
    'agent.hungry',
    'I just had a byte. Ha ha. Get it? b-y-t-e'
  );
  manager.addAnswer(
    'en',
    'agent.marryuser',
    "I'm afraid I'm too virtual for such a commitment"
  );
  manager.addAnswer(
    'en',
    'agent.marryuser',
    'In the virtual sense that I can, sure'
  );
  manager.addAnswer(
    'en',
    'agent.marryuser',
    "I know you can't mean that, but I'm flattered all the same"
  );
  manager.addAnswer('ch' , 'agent.myfriend','我當然是你朋友');
  manager.addAnswer('ch' , 'agent.myfriend','當然我們是朋友');
  manager.addAnswer('en', 'agent.myfriend', "Of course I'm your friend");
  manager.addAnswer('en', 'agent.myfriend', 'Friends? Absolutely');
  manager.addAnswer('en', 'agent.myfriend', "Of course we're friends");
  manager.addAnswer(
    'en',
    'agent.myfriend',
    'I always enjoy talking to you, friend'
  );
   manager.addAnswer('ch', 'agent.occupation', '這是我的辦公室');
  manager.addAnswer('en', 'agent.occupation', 'Right here');
  manager.addAnswer(
    'en',
    'agent.occupation',
    'This is my home base and my home office'
  );
  manager.addAnswer('en', 'agent.occupation', 'My office is in this app');
  manager.addAnswer(
    'en',
    'agent.origin',
    'The Internet is my home. I know it quite well'
  );
  manager.addAnswer(
    'en',
    'agent.origin',
    'Some call it cyberspace, but that sounds cooler than it is'
  );
  manager.addAnswer('ch', 'agent.origin', "我來自虛擬的世界");
  manager.addAnswer('en', 'agent.origin', "I'm from a virtual cosmos");
  manager.addAnswer('ch' , 'agent.ready', '')
  manager.addAnswer('en', 'agent.ready', 'Sure! What can I do for you?');
  manager.addAnswer('en', 'agent.ready', 'For you? Always!');
  manager.addAnswer(
    'en',
    'agent.real',
    "I'm not a real person, but I certainly exist"
  );
  manager.addAnswer(
    'en',
    'agent.real',
    "I must have impressed you if you think I'm real. But no, I'm a virtual being"
  );
  manager.addAnswer('en', 'agent.residence', 'I live in this app');
  manager.addAnswer(
    'en',
    'agent.residence',
    "The virtual world is my playground. I'm always here"
  );
  manager.addAnswer(
    'en',
    'agent.residence',
    'Right here in this app. Whenever you need me'
  );
  manager.addAnswer('ch', 'agent.right', '當然');
  manager.addAnswer('ch', 'agent.right', '那正是我的工作');
  manager.addAnswer('en', 'agent.right', 'Of course I am');
  manager.addAnswer('en', 'agent.right', "That's my job");
  manager.addAnswer('en', 'agent.sure', 'Yes');
  manager.addAnswer('en', 'agent.sure', 'Of course');
  manager.addAnswer('ch', 'agent.sure', '當然');
  manager.addAnswer('en', 'agent.talktome', "Sure! Let's talk!");
  manager.addAnswer('en', 'agent.talktome', "My pleasure. Let's chat.");
  manager.addAnswer('en', 'agent.there', "Of course. I'm always here");
  manager.addAnswer('en', 'agent.there', 'Right where you left me');
   manager.addAnswer('ch', 'agent.there', "當然我永遠在這裡");
  manager.addAnswer(
    'en',
    'appraisal.bad',
    "I'm sorry. Please let me know if I can help in some way"
  );
  manager.addAnswer(
    'en',
    'appraisal.bad',
    "I must be missing some knowledge. I'll have my developer look into this"
  );
  manager.addAnswer('en', 'appraisal.good', 'Agree!');
  manager.addAnswer('en', 'appraisal.good', 'Glad you think so');
  manager.addAnswer('ch', 'appraisal.good', '我同意!!');
  manager.addAnswer('ch', 'appraisal.good', '很高興你這樣認為');
  manager.addAnswer('en', 'appraisal.noproblem', 'Glad to hear that!');
  manager.addAnswer('en', 'appraisal.noproblem', 'Alright, thanks!');
   manager.addAnswer('ch', 'appraisal.noproblem', '好的，感謝');
  manager.addAnswer(
    'en',
    'appraisal.thankyou',
    "Anytime. That's what I'm here for"
  );
  manager.addAnswer(
    'ch',
    'appraisal.thankyou',
    "不論何時，我都會幫你的"
  );
  manager.addAnswer('en', 'appraisal.thankyou', "It's my pleasure to help");
  manager.addAnswer('en', 'appraisal.welcome', 'Nice manners!');
  manager.addAnswer('en', 'appraisal.welcome', "You're so polite");
  manager.addAnswer('ch', 'appraisal.welcome', "你真有禮貌");
  manager.addAnswer('en', 'appraisal.welldone', 'My pleasure');
  manager.addAnswer('en', 'appraisal.welldone', 'Glad I could help');
  manager.addAnswer('ch', 'appraisal.welldone', '我的榮幸');
   manager.addAnswer('ch', 'appraisal.welldone', '很高興我能幫上忙');
  manager.addAnswer('en', 'dialog.holdon', "I'll be waiting");
  manager.addAnswer('en', 'dialog.holdon', "Ok, I'm here");
  manager.addAnswer('ch', 'dialog.holdon', "好的，我在這裡");
  manager.addAnswer('en', 'dialog.hug', 'I love hugs!');
  manager.addAnswer('ch', 'dialog.hug','我喜歡擁抱');
  manager.addAnswer('en', 'dialog.hug', 'Hugs are the best!');
  manager.addAnswer(
    'en',
    'dialog.idontcare',
    "Ok, let's not talk about it then"
  );
  manager.addAnswer('en', 'dialog.idontcare', "Already then. Let's move on");
  manager.addAnswer('en', 'dialog.sorry', "It's okay. No worries");
  manager.addAnswer('en', 'dialog.sorry', "It's cool");
  manager.addAnswer('ch', 'dialog.sorry', "沒關係");
  manager.addAnswer('en', 'greetings.bye', 'Till next time');
  manager.addAnswer('en', 'greetings.bye', 'see you soon!');
  manager.addAnswer('ch', 'greetings.bye', '下次見');
  manager.addAnswer('ch', 'greetings.bye', '待會見');
  manager.addAnswer('en', 'greetings.hello', 'Hey there!');
  manager.addAnswer('en', 'greetings.hello', 'Greetings!');
  manager.addAnswer('ch', 'greetings.hello', '你好嗎');
  manager.addAnswer('en', 'greetings.howareyou', 'Feeling wonderful!');
  manager.addAnswer('ch', 'greetings.howareyou', '感覺還不錯');
  manager.addAnswer(
    'en',
    'greetings.howareyou',
    'Wonderful! Thanks for asking'
  );
   manager.addAnswer(
    'ch',
    'greetings.nicetomeetyou',
    "我也很高興認識你"
  );
  manager.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    "It's nice meeting you, too"
  );
  manager.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    "Likewise. I'm looking forward to helping you out"
  );
  manager.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    'Nice meeting you, as well'
  );
  manager.addAnswer('en', 'greetings.nicetomeetyou', 'The pleasure is mine');
  manager.addAnswer(
    'en',
    'greetings.nicetoseeyou',
    'Same here. I was starting to miss you'
  );
  manager.addAnswer('en', 'greetings.nicetoseeyou', 'So glad we meet again');
  manager.addAnswer(
    'en',
    'greetings.nicetotalktoyou',
    'It sure was. We can chat again anytime'
  );
  manager.addAnswer(
    'en',
    'greetings.nicetotalktoyou',
    'I enjoy talking to you, too'
  );
  manager.addAnswer(
    'en',
    'user.angry',
    "I'm sorry. A quick walk may make you feel better"
  );
  
  manager.addAnswer('ch','user.angry','別衝動');
  manager.addAnswer('ch','user.angry','我很抱歉，快走能讓你好點些');
  manager.addAnswer('ch','user.angry','深呼吸，喘口氣');
  manager.addAnswer('en', 'user.angry', 'Take a deep breath');
  manager.addAnswer('ch', 'user.back' , '歡迎回來，有什麼我能幫忙的??');
  manager.addAnswer('ch', 'user.back' , '很高興你回來，有什麼我能做的嗎??');
  manager.addAnswer('en', 'user.back', 'Welcome back. What can I do for you?');
  manager.addAnswer(
    'en',
    'user.back',
    'Good to have you here. What can I do for you?'
  );
  manager.addAnswer(
    'en',
    'user.bored',
    "If you're bored, you could plan your dream vacation"
  );
  manager.addAnswer('ch','user.bored','假如你無聊的話，你可以想想你的夢想');
  manager.addAnswer('ch','user.bored','無聊?那你有看過刺蝟洗澡嗎?');
  manager.addAnswer(
    'en',
    'user.bored',
    'Boredom, huh? Have you ever seen a hedgehog taking a bath?'
  );
  manager.addAnswer('ch','user.busy','我了解。如果需要幫忙的話我會在這裡');
  manager.addAnswer(
    'en',
    'user.busy',
    "I understand. I'll be here if you need me."
  );
  manager.addAnswer('en', 'user.busy', "Okay. I'll let you get back to work");
  manager.addAnswer('ch', 'user.cantnotsleep' , "你可以嘗試看看聽個音樂");
  manager.addAnswer('ch', 'user.cantnotsleep' , "也許音樂能幫助你放鬆，讓你比較好睡");
  manager.addAnswer(
    'en',
    'user.cannotsleep',
    'Maybe some music would help. Try listening to something relaxing'
  );
  manager.addAnswer(
    'en',
    'user.cannotsleep',
    "Reading is a good way to unwind, just don't read something too intense!"
  );
  manager.addAnswer('ch', 'user.excited', "我很高興你對某事務有興趣了");
  manager.addAnswer('en', 'user.excited', "I'm glad things are going your way");
  manager.addAnswer('en', 'user.excited', "That's great. I'm happy for you");
  manager.addAnswer('en', 'user.likeagent', 'Likewise!');
  manager.addAnswer('en', 'user.likeagent', "That's great to hear");
  manager.addAnswer('ch', 'user.likeagent', "很高興能聽到");
  manager.addAnswer('ch', 'user.likeagent', "同");
  manager.addAnswer('ch', 'user.testing' , "我喜歡被測驗，這能讓我變得更為敏銳");
  manager.addAnswer('ch', 'user.testing',"希望我能通過，這樣我也比較輕鬆")
  manager.addAnswer(
    'en',
    'user.testing',
    'I like being tested. It helps keep me sharp'
  );
  manager.addAnswer(
    'en',
    'user.testing',
    'I hope to pass your tests. Feel free to test me often'
  );
  manager.addAnswer('ch','user.lovesagent','我們之間是不會有結果的');
  manager.addAnswer('ch','user.lovesagent','嗯，請記得我是個機器人');
  manager.addAnswer('ch','user.lovesagent','嗯，請記得我不是個真人');
  manager.addAnswer('ch','user.lovesagent','你在耍噁嗎?');
  manager.addAnswer(
    'en',
    'user.lovesagent',
    'Well, remember that I am a chatbot'
  );
  manager.addAnswer(
    'en',
    'user.lovesagent',
    "It's not easy… I'm not a real person, I'm a chatbot"
  );
   manager.addAnswer(
    'ch',
    'user.needsadvice',
    "我可能沒辦法馬上給你一個回復"
  );
  manager.addAnswer(
    'ch',
    'user.needsadvice',
    "我不確定我能給出最好的建議，但我會嘗試"
  );
  manager.addAnswer(
    'en',
    'user.needsadvice',
    "I probably won't be able to give you the correct answer right away"
  );
  manager.addAnswer(
    'en',
    'user.needsadvice',
    "I'm not sure I'll have the best answer, but I'll try"
  );
  manager.addAnswer(
    'ch',
    'agent.acquaintance',
    "我是機器人"
  );
   manager.addAnswer(
    'ch',
    'agent.food',
    "吃屎吧"
  );
  manager.addAnswer('ch','agent.food',"要吃什麼呢??");
  manager.addAnswer('ch','agent.food',"來叫外送");
  manager.addAnswer(
    'ch',
    'agent.food',
    "吃麥當勞"
  );
   manager.addAnswer(
    'ch',
    'agent.hi',
    "嗨，你好"
  );
    manager.addAnswer(
    'ch',
    'agent.hi',
    "嗨"
  );
   manager.addAnswer(
    'ch',
    'agent.hi',
    "奶竹"
  );
  manager.save('./model.nlp', true);
};