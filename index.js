// const discord = require("discord.js");
// const botConfig = require("./botconfig.json");


// const fs = require("fs");
 
// const client = new discord.Client();

// client.commands = new discord.Collection();

// fs.readdir("./commands/" , (err, files) => {

//     if(err) console.log(err);

//     var jsFiles = files.filter(f => f.split(".").pop() === "js");

//     if(jsFiles.length <=0) {
//         console.log("Kan geen files vinden");
//         return;
//     }

//     jsFiles.forEach((f,i) => {

//         var fileGet = require(`./commands/${f}`);
//       console.log(`De file ${f} is geladen`);

//       client.commands.set(fileGet.help.name, fileGet);
        
//     })

// });
 
// client.on("ready", async () => {
 
//     console.log(`${client.user.username} is online.`);
 
//     client.user.setActivity("-help", { type: "PLAYING" });
 
// });

// client.on("messageUpdate", async(oldMessage, newMessage) => {

//     if(newMessage.author.bot) return;

//     var embed = new discord.MessageEmbed()
//     .setAuthor(`${newMessage.author.tag} (${newMessage.author.id})`, newMessage.author.avatarURL({size: 4096}))
//     .setDescription(`Bericht ${newMessage.id} is bewerkt in ${newMessage.channel}\n **Voor:** ${oldMessage.content}\n **Nu:** ${newMessage.content}`)
//     .setTimestamp()
//     .setColor("GREEN")

//     client.channels.cache.get('866393131732959253').send;
// });

 
 
// client.on("message", async message => {
 
//     if(message.author.bot) return;
 
//     if(message.channel.type === "dm") return;

//     var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

//     if(!prefixes[message.guild.id]){
//         prefixes[message.guild.id] = {
//             prefix: botConfig.prefix
//         };

//     }

//     var prefix = prefixes[message.guild.id].prefix;


//    // var prefix = botConfig.prefix;
 
//     var messageArray = message.content.split(" ");
 
//     var command = messageArray[0];

//     var arguments = messageArray.slice(1);

//     var commands = client.commands.get(command.slice(prefix.length));

//     if(commands) commands.run(client,message, arguments);

// });

// client.login(process.env.token);

const Discord = require('discord.js');

const bot = new Discord.Client();


const { token } = require('./config.json');

const { readdirSync, read } = require('fs');

const { join } = require('path');

bot.commands = new Discord.Collection();

const prefix = '.';
//this prefix can be what ever you want ;)

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const  command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on("error", console.error);


//------------------------------------------------------------------------------
bot.on('ready', () => {
    console.log('Bot is ready!');
    bot.user.setActivity('Prefix is: .', { type: "WATCHING" }).catch(console.error)
})
//------------------------------------------------------------------------------

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!bot.commands.has(command)) return;


        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error){
            console.error(error);
        }
    }
})

bot.login(token);