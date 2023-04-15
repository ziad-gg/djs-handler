const { Client, GatewayIntentBits } = require('discord.js');
const { Application, readPath, Command } = require('./src/index.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const app = new Application({
  client: client,
  commandsPath: "./commands",
  EventsPath: "./commands",
})

async function test() {
  await app.build()
  console.log(app.paths)
  const cmd = new Command()
  console.log(cmd.toJSON())
}
test()