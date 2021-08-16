module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't do this!");

    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }

    ]);

    message.channel.send("**LOCKDOWN**! This channel has been closed!")

}

module.exports.help = {
    name: "lockdown"
}