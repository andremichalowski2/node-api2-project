const server = require("./server.js"); // import server from server

//LISTENING
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
