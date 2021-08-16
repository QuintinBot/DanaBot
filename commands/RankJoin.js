const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    client.on("guildMemberAdd", member => {
 
        // Rol vinden
        var role = member.guild.roles.cache.get('876578388226215996');
     
        if (!role) return;
     
        // Rol toevoegen aan de persoon.
        member.roles.add(role);
     
        // Welkom kanaal.
        const channel = member.guild.channels.cache.get('848743794157420607');
     
        if (!channel) return;
     
        channel.send(`Welcome by **Sluts From Dana!, ${member}`);
     
    });

}

module.exports.help = {
    name: "JoinRank"
}