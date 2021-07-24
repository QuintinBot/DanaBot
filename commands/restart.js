const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, je kan dit command niet gebruiken");

    await message.channel.send("De bot is aan het restarten!");

    process.exit();

}

module.exports.help = {
    name: "restart"
}