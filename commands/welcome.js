const discord = require("discord.js");
const { WelcomerZerotwo } = require("zerotwo-welcomer");
const welcome = new WelcomerZerotwo();

module.exports.run = async (client, message, args) => {

    bot.on("guildMemberAdd", async (member) => {
        const channel = member.guild.channels.cache.find(
          (ch) => ch.name === "ᴡᴇʟᴋᴏᴍッ"
        );
        if (!channel) return;
      
        let data = await welcome.welcome(member, {
          link: "https://wallpapercave.com/wp/wp5128415.jpg",
          text: "welcome <3",
        });
      
        const attachment = new Discord.MessageAttachment(data, "welcome-image.png");
      
        channel.send(`Welcome to the server, ${member.user.username}!`, attachment);
      });
    
}

module.exports.help = {
    name: "welcome"
}