//IMPORTS
const express = require('express') //import
const server = express(); // instantiate
server.use(express.json()); // configure
const postRoutes = require("./posts/postRoutes"); // routes imp


//ROUTES
server.use("/api/posts", postRoutes); // root for post routes
server.use('/', (req, res) => res.send("API is running!")); //test 

module.exports = server;
