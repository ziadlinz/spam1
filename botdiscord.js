const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ♛ 『DE』 NovritschPro#6808");


client.on("ready", () => {
    let channel = client.channels.get("510945221853446155")
setInterval(function() {
channel.send(`fuck me`);
}, 50)
})






















        var prefix = "1";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 
client.login("NTEwOTQ2NTQ5NDA1MzE5MTg4.Dsjw1g.nwbqDn4MaLKkPTFqIJJcEwM6-5A");// لا تغير فيها شيء
