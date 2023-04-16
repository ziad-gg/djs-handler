const { Command } = require('../src/');

module.exports = new Command() 
.setName("ping")
.setExecution(run)

async function run() {
  const { message, client, args } = this;
  message.reply({content: "done"});
}