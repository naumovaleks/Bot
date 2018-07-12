const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.loginNDY2NTE2NTg0MjY2MjAzMTQ3.DiixWw.KXDzirq6jsA8dDj4yGA0MFOaZns();
