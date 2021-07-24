const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    bot.on("guildMemberAdd", member => {
 
        const channel = member.guild.channels.find("name", "report");
        if (!channel) console.log("Kan het kanaal niet vinden.");
     
        var joinEmbed = new discord.RichEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
            .setDescription(`Hoi ${member.user.username}, **Welkom op de server**. Hier nog meer uitleg.`)
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter("Gebruiker gejoined.");
     
        channel.send(joinEmbed);
     
    });

}

module.exports.help = {
    name: "join"
}