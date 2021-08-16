module.exports.run = async (client, message, args) => {

    var value = ["head", "coin"];

    var result = value[Math.floor(Math.random() * value.length)];

    message.channel.send(`its's.. **${result}**!`);

}

module.exports.help = {
    name: "headofcoin"
}