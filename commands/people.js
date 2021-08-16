const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var ledenTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = ledenTotal - bots;
    var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var ledenEmbed = new discord.MessageEmbed()
        .setTitle("Sluts From Dana!")
        .setColor("#d18cd7")
        .addField("People", ledenTotal, true)
        .addField("Bots", bots, true)
        .addField("People Online", people, true)

    message.channel.send(ledenEmbed);

}

module.exports.help = {
    name: "people",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}