const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("Gebruiker is verbannen!");
        }else{
            message.channel.send(`Je kan deze gebruiker niet bannen!`);


            var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(banUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Verbannen:** ${banUser} (${banUser.id})
            **Verbannen door:** ${message.author}
            **Redenen: ** ${reason}`);
        }
    
    }

module.exports.help = {
    name: "ban"
}