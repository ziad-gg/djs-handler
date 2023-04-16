const fs = require('node:fs');
const path = require('node:path');
const { Collection, Client } = require('discord.js');
const { DiscordjsTypeError, ErrorCodes } = require('discord.js/src/errors');

class Application {
  
  constructor({ client, commandsPath, EventsPath } = {}) {
    const main = this;
    this.main = main;
    this._patch(main, "client", client);    
    this._patch(main, "commandsPath", commandsPath);    
    this._patch(main, "EventsPath", EventsPath);    
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
   await this._build();
  }
  
  async _build() {
      if (!this.client) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "Client", "parameters", true);
      if (!this.commandsPath) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "commandsPath","parameters", true);
      if (!this.EventsPath) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "EventsPath", "parameters", true);
      if (!(this.client instanceof Client)) throw new DiscordjsTypeError(ErrorCodes.InvalidType, "Client", " discord.js Client");
      if (!this.client.user) throw new DiscordjsTypeError(ErrorCodes.TokenMissing);
    
      this._patch(this.main, "data", new Collection());
      this._patch(this.main, "paths", new Object());
    
      await fs.readdirSync(this.commandsPath);
      await fs.readdirSync(this.EventsPath);
    
      this.paths.commandsPath = this.commandsPath;
      this.paths.EventsPath = this.EventsPath;
  };
  
  toJSON() {
    return this.data
  }
  
  
}

module.exports = Application