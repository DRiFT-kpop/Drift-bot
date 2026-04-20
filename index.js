require("dotenv").config();
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
  console.log(`DR|FT SIGNAL ONLINE: ${client.user.tag}`);
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.name === "welcome-signal"
  );

  if (!channel) return;

  channel.send(
`📡 SIGNAL DETECTED  
Welcome, ${member.user.username}.  
You are now inside the DR|FT archive.  
Status: ACTIVE LISTENER`
  );
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  if (content.includes("drift")) {
    message.reply("the signal is moving… do not hold onto it.");
  }

  if (content.includes("water")) {
    message.reply("everything returns to the current eventually.");
  }

  if (content.includes("sad")) {
    message.reply("memory phase detected. remain stable.");
  }
});

client.login(process.env.TOKEN);
