const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`on 0 servers | *help | By Suhaib #4272 .`,'https://www.twitch.tv/xx_ibrahim15_xx');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '*bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**_اسم السيرفر:rose:_**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('**_المرسل:rose:_**', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField(`**_   _**`, args)
            m.send(`**_   _**`,{embed: bc});
        });
    }
})
client.login("NTEwNTE3MzU4MDY3MDU2NjQ0.Ds4R_w.fJoO7YjpX-GB0EiAaoUNkxaF-sY");