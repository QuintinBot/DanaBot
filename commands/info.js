const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Info van Knolraap Army!')
            .setDescription("Nog geen info...")
            .setColor("#d18cd7")
            .addField("Bot naam", client.user.username)
            .setThumbnail('https://images.smulweb.nl/wiki/132/high_res/knolraap-large.jpg')
            .setImage('')
            .setTimestamp()
            .setFooter("Bot is gemaakt door Quintin#1000")

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}