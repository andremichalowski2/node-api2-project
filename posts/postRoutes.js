const express = require("express"); //import
const db = require('../data/db'); //data
const router = express.Router(); //instantiate
router.use(express.json()); //configure

//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//

//***TEST***//
router.get("/", async (req, res) => {
  res.status(200).json({ ping: "pong" });
});

//-----------------------------------------------------------------------------------------//

//POST REQUESTS (NEW POST)
router.post("/", async (req, res) => {
  const post = req.body;
  console.log("Router Post");
  if (!post.title || !post.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post." });
  } else {
    try {
      const newPost = await db.insert(post);
      res.status(201).json({ ...newPost, ...post });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "There was an error while saving the post to the database",
      });
    }
  }
});

//POST REQUEST (NEW COMMENT)
router.post("/:id/comments", async (req, res) => {
  const { id } = req.params;
  // console.log(comment.length);
  if (req.body.text) {
    const comment = {
      text: req.body.text,
      post_id: id,
    };
    try {
      const post = await db.findById(id);
      if (post.length > 0) {
        const commentID = await db.insertComment(comment);
        const newComment = await db.findCommentById(commentID.id);
        res.status(201).json(newComment[0]);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "There was an error while saving the comment to the database",
      });
    }
  } else {
    res.status(400).json({ message: "Please provide text for the comment." });
  }
});


// router.get('/', (req, res) => {...}
// router.get('/:id', (req, res) => {...}
// router.post('/', (req, res) => {...}
// router.delete('/:id', (req, res) => {...}
// router.put('/:id', (req, res) => {...}

module.exports = router;
