const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    bot.on("guildMemberAdd", member => {
 
        const channel = member.guild.channels.find("ʟᴏɢꜱ", "ᴡᴇʟᴋᴏᴍッ");
        if (!channel) console.log("Can't find this channel.");
     
        var joinEmbed = new discord.RichEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
            .setDescription(`Hey ${member.user.username}, **Welcome by the **Sluts From Dana**.`)
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter("User joined.");
     
        channel.send(joinEmbed);
     
    });

}

module.exports.help = {
    name: "join"
}