const server = require("./server.js"); // import server from server

const port = 3000; // port and listening for requests
server.listen(port, () => {
  console.log("Server running on localhost:3000");
});
