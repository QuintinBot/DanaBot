const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var member =message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) ||
    client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase()));

    if(!member) member = message.member;

    var embed = new discord.MessageEmbed()
    .setTitle(`Avatar van ${member.user.username}`)
    .setColor("#d18cd7")
    .setImage(member.user.displayAvatarURL({ dymanic: true, size: 4096 }));

    messsage.channel.send(embed);
}

module.exports.help = {
    name: "avatar"
}