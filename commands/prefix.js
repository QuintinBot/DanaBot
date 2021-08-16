const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You can't use this command.");

    if(!args[0]) return message.reply("Use the command good!");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefix: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setTitle("Prefix")
    .setColor("#ff0000")
    .setDescription(`The prefix has changed to ${args[0]}`);

    message.channel.send(embed);
    

}

module.exports.help = {
    name: "prefix"
}