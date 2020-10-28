const express = require("express"); //import
const db = require('../data/db'); //data
const router = express.Router(); //instantiate
router.use(express.json()); //configure

// router.get('/', (req, res) => {...}
// router.get('/:id', (req, res) => {...}
// router.post('/', (req, res) => {...}
// router.delete('/:id', (req, res) => {...}
// router.put('/:id', (req, res) => {...}

module.exports = router;
