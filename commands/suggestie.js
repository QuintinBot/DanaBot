const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "ꜱᴜɢɢᴇꜱᴛɪᴇ");
    if(!channel) message.reply("Can't find the channel.");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Give a suggestie.");

    var embed = new discord.MessageEmbed()
    .setDescription(argsBericht)
    .setColor("#d18cd7")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

    channel.send(embed).then(async (msg) => {

        await msg.react("👍");
        await msg.react("👎");
        message.delete();
    }).catch(err => {
        console.log(err);
    });
    
}

module.exports.help = {
    name: "suggestie"
}