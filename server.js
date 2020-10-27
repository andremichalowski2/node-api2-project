//IMPORTS
const express = require('express')
const server = express();
server.use(express.json());
// import router once made

//ROUTES
// insert router root here
server.use('/', (req, res) => res.send("API is running!"));

module.export = server;
