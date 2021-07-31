const discord = require("discord.js");
const radio = require('discord-radio-player')
const search = await radio.Radio.search({searchterm:'kissfm',limit:1})

module.exports.run = async (client, message, args) => {

    let streamUrl = search[0].url_resolved
    let stream = radio.Radio.getStream(streamUrl)
    message.member.voice.channel.join().then(c=>c.play(stream,{type:'opus'}))
    //starts playing radio

    let streamUrl = search[0].url_resolved
    // loading filters
    let FFmpegfilters = [
        "-af","bass=g=20,dynaudnorm" //bassboost filter for example
    ]
    let stream = radio.Radio.getStream(streamUrl,{filters:FFmpegfilters}) //defining filters 
    message.member.voice.channel.join().then(c=>c.play(stream,{type:'opus'}))
    //starts playing radio

    let stream = radio.Radio.getStream(streamUrl,{volume:2}) // 1 is default volume and 2 is double volume whereas 0.5 is half volume

}

module.exports.help = {
    name: "infotje"
}
