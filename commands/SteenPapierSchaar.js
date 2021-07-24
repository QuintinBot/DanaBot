const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // -sps steen of papier of schaar

    if(!args[0]) return message.reply("Gebruik de goede command!");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() *options.length)];

    if(!args[0].toUpperCase == "STEEN"){

        if(result == "papier") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, So... I won!`);

        } else if(result == "schaar"){

            return message.channel.send(`Ik heb ${result} :scissors:, Jij hebt gewonnen... GG!`);

        }else if(result == "steen"){

            return message.channel.send(`Ik heb ${result} :moyai:, Yes! Het is gelijkspel!`);

        }

    }

}

module.exports.help = {
    name: "sps"
}