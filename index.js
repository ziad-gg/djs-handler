const { Client, GatewayIntentBits } = require('discord.js');
const { Application, readPath } = require('./src/index.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const app = new Application({
  client,
  commandsPath: "./commands",
  EventsPath: "./commands",
})

app.build()

console.log(app)

console.log(readPath('commands'))
