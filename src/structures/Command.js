const Application = require('./Application.js');
const { DiscordjsTypeError, ErrorCodes } = require('discord.js/src/errors');

class Command extends Application{
  
  constructor() {
    super()
    this._patch(this, "data", {});
  }
  
  setName(name) {
    
  }
}


module.exports = Command
