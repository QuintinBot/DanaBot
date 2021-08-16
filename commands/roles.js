const { Role } = require("discord.js");
const database = require ("../database.json");
const mysql = require = ("mysql");

module.exports.run = async (client, message, args) => {

    var con = mysql.createConnection({
        host: database.host,
        user: database.user,
        password: database.password,
        database: database.database
    })

    con.createConnection(err =>{
        if(err) throw err;
    });

    // !role gebruiker rolNaam verwijderenBool

    var user = message.guild.member(message.mentions.users.first());
    var roleName = args[1];
    var remove = args[2];

    if(rolename){
        var roleInfo = message.guild.roles.cache.find(r => r.name === roleName);
        if(!roleName) return message.channel.send("Role does not exist.")
        var roleID = roleInfo.roleID;
    }

    if(user && !roleName){

    }else if(user && roleName && !remove){

        con.query(`SELECT * FROM rollen WHERE IDUser = '${user.id}' AND IDRole = '${roleID}'`,(err, rows) => {

            if(err) throw err;

            if(rows.length > 0){
                return message.channel.send("This user got already this rol.")
            }else {
                con.query(`INSERT INTO rollen (IDUser, IDRole) VALUES ("${user.id}", "${roleID}")`);
                user.roles.add(roleID);
                return message.channel.send("This role has been added.")
            }

        });


    }else if (user && roleName && remove == "yes"){

    }else{
        message.channel.send("Use the command like this: -role User RoleName delete");
    }
    
}

module.exports.help = {
    name: "role"
}