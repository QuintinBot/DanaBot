module.exports.run = async (client, message, args) => {

    var result = Math.ceil(Math.random() * 6);

    message.channel.send(`:game_die: You've thrown**${result}**! :game_die:`);

}

module.exports.help = {
    name: "dice"
}