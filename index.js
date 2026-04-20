const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`DR|FT BOT ONLINE: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (msg === "ping") {
    message.reply("DR|FT signal stable.");
  }

  if (msg.includes("drift")) {
    message.reply("the signal is moving…");
  }
});

client.login(process.env.TOKEN);
