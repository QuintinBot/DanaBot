const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    try{
//var text = alle regels. \n = een nieuwe regel.
        var text = "**Welcome by the commands from Dana's Stripper Bot!** \n \n **__Normal Commands__**  \n 1. -serverinfo = Indicates when you **Sluts From Dana** have been joined. \n 2. -ping = Your ms/ping. \n 3. -people = You can see how much people are in **Sluts From Dana**.  \n \n **__Games__** \n 1. -dice = Have fun, and dice nicely! \n 2. -headofcoin = What do you choose? Head or tail?? \n 3. -meme = Enjoy watching meme's! \n \n **__Admin Commands__**  \n 1. -tempmute = Muting someone for a certain time. \n 2. -warn = Warn a person. \n 3. -clear = Delete message's. \n 4. -announcement = Pop a announcement. \n 5. -kick = Kick someone of **Sluts From Dana**. \n 6. -prefix = Change the prefix of the bot! \n 7. -lockdown = Stop the channel! \n 8. -poll = Make a poll. \n 9. -unlock = Unlock the channel!";
        
        message.author.send(text);

        message.reply("Hey, you got a mail! :eyes:")

    }catch(error){
        message.reply("There is something wrong!");
    }


}
module.exports.help = {
    name: "help"
}