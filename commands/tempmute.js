const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't do this.");

    if (!args[0]) return message.reply("Give a reason.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No perms");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("Can't find this user.");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't mute this user");
// dit is de mute rol
    var muteRole = message.guild.roles.cache.get('876590972509761576');
    if (!muteRole) return message.channel.send("The roll **Muted** does not exist.");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("No time given.");

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} got muted for ${muteTime}`);

    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`${mutePerson} is unmuted`);

    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}
