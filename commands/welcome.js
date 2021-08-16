const discord = require("discord.js");
const { WelcomerZerotwo } = require("zerotwo-welcomer");
const welcome = new WelcomerZerotwo();

Welcome(client, {
  "numericserverid1": {
      privatemsg : "Default message, welcome anyway",
      publicmsg : "Test",
      publicchannel : "848743794157420607"
  },

  }
)


module.exports.help = {
    name: "welcome"
}