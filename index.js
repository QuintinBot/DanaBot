const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const database = require("./database.json");
const levelFile = require("./data/levels.json");


const fs = require("fs");
 
const client = new discord.Client();

client.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Kan geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
      console.log(`De file ${f} is geladen`);

      client.commands.set(fileGet.help.name, fileGet);
        
    })

});
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("|| -help || Developer: Quintin#1000 ||", { type: "PLAYING" });
 
});

client.on("guildMemberAdd", member => {
 
    // Rol vinden
    var role = member.guild.roles.cache.get('876578388226215996');
 
    if (!role) return;
 
    // Rol toevoegen aan de persoon.
    member.roles.add(role);
 
    // Welkom kanaal.
    const channel = member.guild.channels.cache.get('848743794157420607');
 
    if (!channel) return;
 
    channel.send(`Welcome by **Sluts From Dana**!, ${member}`);
 
})


client.on("messageUpdate", async(oldMessage, newMessage) => {

    if(newMessage.author.bot) return;

    var embed = new discord.MessageEmbed()
    .setAuthor(`${newMessage.author.tag} (${newMessage.author.id})`, newMessage.author.avatarURL({size: 4096}))
    .setDescription(` ${newMessage.id} has been edited in ${newMessage.channel}\n **Before:** ${oldMessage.content}\n **Now:** ${newMessage.content}`)
    .setTimestamp()
    .setColor("GREEN")

    client.channels.cache.get('876591446302531584').send;
});

var swearWords = ["Kanker", "kanker", "cancer"];

client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;

    var msg = message.content.toLowerCase();

    for (let i = 0; i < swearWords.length; i++) {

        if(msg.includes(swearWords[i])){

            message.delete();

            return message.reply("Don't swear please!").then(msg => msg.delete({timeout: 3000}));

        }

    }

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefix: botConfig.prefix
        };

    }

    var prefix = prefixes[message.guild.id].prefix;


   // var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    RandomXp(message);

    if(!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client,message, arguments);

});

client.on("messageDelete", messageDeleted => {

    if(messageDeleted.author.bot) return;

    var content = messageDeleted.content;
    if(!content) content = "Geen bericht gevonden.";

    var respone = `Message ${messageDeleted.id} has deleted in ${messageDeleted.channel}\n **Message:** ${content}`;

    var embed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.id} ${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({size: 4096})}`)
        .setDescription(respone)
        .setTimestamp()
        .setColor("ORANGE");
//Naam van het kanaal
    client.channels.cache.find(c => c.name == "ʟᴏɢꜱ").send(embed);


});

function RandomXp(message) {

    var randomNumber = Math.floor(Math.random() * 15) + 1;

    var idUser = message.author.id;

    if (!levelFile[idUser]) {
        levelFile[idUser] = {
            xp: 0,
            level: 0
        }
    }

    levelFile[idUser].xp += randomNumber;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;

    var nextLevelXp = levelUser * 300;

    if(nextLevelXp == 0) nextLevelXp = 100;

    if(xpUser >= nextLevelXp){

        levelFile[idUser].level += 1;

        fs.writeFile("./date/levels.json", JSON.stringify(levelFile), err => {
            if(err) console.log(err);
        });

        var embedLevel = new discord.MessageEmbed()
        .setDescription("**Level Up!**")
        .setColor("PINK")
        .setField("New Level: ", levelFile[idUser].level);
        message.channel.send(embedLevel);

    }
    
}

client.login(process.env.token);
