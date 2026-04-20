const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log("DR|FT BOT ONLINE");
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("drift")) {
    message.reply("signal received.");
  }
});

client.login(process.env.TOKEN);
