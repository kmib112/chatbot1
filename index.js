console.log("Hello, World!");
var login = require("facebook-chat-api");
// Create simple echo bot
login({email: "kmib112@gmail.com", password: "098586500200Aqzz"}, function callback (err, api) {
    if(err) return console.error(err);
    api.listen(function callback(err, message) {
        api.sendMessage("Mình sẽ trả lời sau.", message.threadID);
    });
});