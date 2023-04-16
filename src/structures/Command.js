const Application = require('./Application.js');
const { DiscordjsTypeError, ErrorCodes } = require('discord.js/src/errors');

class Command extends Application{
  
  constructor() {
    super()
    this._patch(this, "data", {});
  }
  
  setName(Name) {
    if (typeof Name !== "string") throw new DiscordjsTypeError(ErrorCodes.InvalidType, "command Name", "String", true);
    this._patch(this.data, "Name", Name);
    return this
  }
  
  setDescription(Description) {
    if (typeof Description !== "string") throw new DiscordjsTypeError(ErrorCodes.InvalidType, "command Description", "String", true);
    this._patch(this.data, "Description", Description);
    return this
  }
  
  setUsage(Usage) {
    if (!Array.isArray(Usage) && typeof Usage !== "string") {
        throw new DiscordjsTypeError(ErrorCodes.InvalidType, "command Usage", "String or Array", true);
    }

    if (Array.isArray(Usage)) {
        Usage.forEach((element) => {
            if (typeof element !== "string") {
                throw new DiscordjsTypeError(ErrorCodes.InvalidType, "element in command Usage array", "String", true);
            }
        });
    }

    this._patch(this.data, "Usage", Usage);
    return this;
 };
  
  setExample(examples) {
    if (!Array.isArray(examples) && typeof examples !== "string") {
        throw new DiscordjsTypeError(ErrorCodes.InvalidType, "command examples", "String or Array", true);
    }

    if (Array.isArray(examples)) {
        examples.forEach((element) => {
            if (typeof element !== "string") {
                throw new DiscordjsTypeError(ErrorCodes.InvalidType, "element in command examples array", "String", true);
            }
        });
    }

    this._patch(this.data, "examples", examples);
    return this;
 }


  
  
}


module.exports = Command
