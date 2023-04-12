'use strict';

require('dotenv').config();
// Start up DB Server
const { db } = require('./src/auth/models/index.js');
let server = require('./src/server.js');
let PORT = process.env.PORT;

db.sync()
  .then(() => {

    // Start the web server
    // require('./src/server.js').start(process.env.PORT);
    server.start(PORT);
  });

