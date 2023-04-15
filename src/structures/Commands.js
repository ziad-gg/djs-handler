const Application = require('./Application.js');

class Command extends Application {
  constructor() {
    this.main._patch(this, "")
  }
}