const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }

module.exports.help = {
    name: "ban"
}