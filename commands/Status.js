const discord = require("discord.js");
const StatusUpdater = require('@tmware/status-rotate')
const Updater = new StatusUpdater(bot)

module.exports.run = async (client, message, args) => {

    const statusMessages = [
        { type: 'PLAYING', name: '-help' },
        { type: 'LISTENING', name: 'Developer Quintin#1000' }
      ]
      
      const Updater = new StatusUpdater(bot, statusMessages)

      Updater.updateStatus({
        type: 'WATCHING',
        name: 'a sports game.'
      }) /* optionally, you can append a shard id */

      Updater.start(10 * 60 * 1000) // Delay of 10 minutes in milliseconds

      Updater.stop()

      ot.setInterval(
        () => Updater.updateStatus(),
        10 * 60 * 1000
      ) /* the second argument is the time in milliseconds */

      // Listen for an event 'updateStatus', update the status when it occurs
    bot.on('updateStatus', () => Updater.updateStatus())

    // Every 10 minutes, emit such an event
    bot.setInterval(() => bot.emit('updateStatus'), 10 * 60000)

    const statusMessages = [
        { type: 'PLAYING', name: 'with {users} users' },
        { type: 'LISTENING', name: '{users} users' },
        { type: 'WATCHING', name: 'over {users} users' },
        { type: 'PLAYING', name: 'in {guilds} servers' },
        { type: 'PLAYING', name: '{prefix}help for help' },
        { type: 'WATCHING', name: '{guilds} servers' }
      ]
      
      const Updater = new StatusUpdater(bot, statusMessages)

      Updater.updateParserData({ key: 'value' })

      Updater.updateParserData({
        users: bot.users.cache.size,
        guilds: bot.guilds.cache.size,
        channels: bot.channels.cache.size
      })

      const Updater = new StatusUpdater(
        bot,
        'https://gist.githubusercontent.com/TMUniversal/253bd3172c3002be3e15e1152dd31bd4/raw/exampleFile.json'
      )

      Updater.setStatusFileUrl(
        'https://gist.githubusercontent.com/TMUniversal/253bd3172c3002be3e15e1152dd31bd4/raw/3c9a2eeb9a79c0b999942e761b11838acb71d89f/exampleFile.json'
      )

      Updater.refetchOnlineData()

      Updater.refetchOnlineData(true)

      Updater.setStatusFileUrl(
        'https://gist.githubusercontent.com/TMUniversal/253bd3172c3002be3e15e1152dd31bd4/raw/3c9a2eeb9a79c0b999942e761b11838acb71d89f/exampleFile.json'
      ).refetchOnlineData()

}

module.exports.help = {
    name: "status"
}