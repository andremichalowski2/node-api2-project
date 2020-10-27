const express = require("express"); // import express
const server = express(); //instantiate server
server.use(express.json()); //configure server

server.get("/", (req, res) => {
  // test endpoint
  res.send("Test endpoint");
});

const port = 3000; // port and listening for requests
server.listen(port, () => {
  console.log("Server running on localhost:3000");
});

module.export = server; // export statement
