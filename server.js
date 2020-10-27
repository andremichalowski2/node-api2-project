const express = require("express"); // import express
const server = express(); //instantiate server
server.use(express.json()); //configure server

server.get("/", (req, res) => {
  // test endpoint
  res.send("Test endpoint");
});

module.export = server; // export statement
