const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)

};

module.exports.help = {
    name: "pingMusic"
}