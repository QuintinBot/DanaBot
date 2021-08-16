const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, you can't do this!");

    if (!args[0]) return message.reply("No user?.");

    if (!args[1]) return message.reply("Give a reason.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Can't find the user.");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn this person!");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Warned:** ${warnUser} (${warnUser.id})
        **Warned by:** ${message.author}
        **Reason: ** ${reason}`)
        .addField("Total warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("876588617835876363");

    if (!channel) return;

    channel.send(embed);

    if (warns[warnUser.id].warns == 4) {

        var embed = new discord.MessageEmbed()
            .setColor("ff0000")
            .setDescription("OMG..")
            .addField("Message", "You got only **__1__** warn left for a ban.");

        message.channel.send(embed);

    } else if (warns[warnUser.id].warns == 5) {
        message.guild.member(warnUser).ban(reason);
        message.channel.send(`${warnUser} Got banned, because he/she got to much warns!`);
    }
}

module.exports.help = {
    name: "warn"
}