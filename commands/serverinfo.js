const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setColor("#d18cd7")
            .addField("Bot name", client.user.username)
            .addField("You joined the server on", message.member.joinedAt)
            .addField("Total members", message.guild.memberCount);

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}