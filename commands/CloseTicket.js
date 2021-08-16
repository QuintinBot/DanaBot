const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
// Dit is de id van je Cotegory
    const categoryID = "876829424010559588";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("You can't do this..");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("This ticket has been closed.")
            .setFooter("Ticket closed")
            .setColor("ORANGE");

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketChannel) return message.reply("There is no **Logs** channel!");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("You can't do this.");

    }



}

module.exports.help = {
    name: "closeticket"
}