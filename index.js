const Discord = require('discord.js');
const bot = new Discord.Client();
var opn = require('opn');



var syncText1 = 'http://sync-video.com/r/';

bot.on('message', (message) => {
    if(message.content == 'syncvid'){
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        //opn(syncText1.concat(text), {app: 'chrome'});
        message.channel.sendMessage('syncvid created with url:');
        message.channel.sendMessage(syncText1.concat(text));
    }
});


bot.login(process.env.BOT_TOKEN);
