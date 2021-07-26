const discord = require("discord.js");
const ms = require("ms");
const timeSpan = ms("200 days");

client.on("guildMemberAdd", (member) => {

    if (member.guild.id !== "868620328207798272") return;
    const createdAt = new Date(member.user.createdAt).getTime();
    const difference = Date.now() - createdAt;

    if (difference < timeSpan) {
     member.send("Je hebt een alt account, contact een StaffLid!");
     member.kick("Alt Account!");
    }

});


module.exports.help = {
    name: "alt"
}