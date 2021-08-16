module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, you can't do this!");

    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            allow: ['SEND_MESSAGES']
        }

    ]);

    message.channel.send("**UNLOCK**! This cannel has opened again!")

}

module.exports.help = {
    name: "unlock"
}