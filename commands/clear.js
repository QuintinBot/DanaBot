const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

// !clear aantal

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, jij kan dit niet doen.");
 
if (!args[0]) return message.reply("Geef een aantal op dat je weg wilt halen");

if (Number.isInteger(parseInt(args[0]))) {

    var aantal = parseInt(args[0]) + 1;

    message.channel.bulkDelete(aantal).then(() => { 

        if (args[0] == 0) {

            message.reply(`U dumb? I can't delete **0** message's?`).then(msg => msg.delete({timeout: 3000}));
        
        } else if (args[0] == 1) {
        
            message.reply(`I deleted 1 message's.`).then(msg => msg.delete({timeout: 3000}));
        
        } else {
        
            message.reply(`I deleted ${args[0]} message's.`).then(msg => msg.delete({timeout: 3000}));
        
        }

    });

} else {
    return message.reply("Enter a number.");
}

}

module.exports.help = {
    name: "clear"
}