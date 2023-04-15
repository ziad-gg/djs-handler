const { Client } = require('discord.js');
const { Application } = require('./src/index.js');
const client = new Client();
const app = new Application({
  client,
})
