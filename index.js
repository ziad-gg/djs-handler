const { Client, GatewayIntentBits } = require('discord.js');
const { Application, readPath, Command } = require('./src/index.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const app = new Application({
  client: client,
  commandsPath: "./commands",
  EventsPath: "./commands",
})


(async function ()  {
 app.build()


console.log(app.paths)

console.log(readPath('commands'))
  
})()
