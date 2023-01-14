const express = require('express');
const cors = require('cors')
const morgan = require('morgan');

const {dbConnection} = require('../database/config')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    // this.Connection();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }
  async Connection() {
    await dbConnection();
  }
  routes() {
    this.app.use('/api', require('../routes/personas.routes'))
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
module.exports = {Server}
