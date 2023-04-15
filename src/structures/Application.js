
const fs = require('node:fs');
const path = require('node:path');
const { Collection, Client } = require('discord.js');
const { DiscordjsTypeError, ErrorCodes } = require('discord.js/src/errors');

class Application {
  
  constructor({ client, commandPath, EventsPath }) {
    this._patch(this, "client", client);    
    this._patch(this, "commandPath", commandPath);    
    this._patch(this, "EventsPath", EventsPath);    
  }
  
  async _patch(obj, key, value) {
    const Object_c = new Object();
    Object_c[key] = value;
    const main = this;
    Object.defineProperty(main, key.toString?.(), {
      value: Object_c[key],
      writeable: false
    });
  };
  
  async build() {
      if (!this.client) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "Client", "is Missing parameters");
      if (!this.commandPath) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "commandPath", "is Missing parameters");
      if (!this.EventsPath) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "EventsPath", "is Missing parameters");
      
  };
  
  
}

module.exports = Application