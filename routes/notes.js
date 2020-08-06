const express = require("express");
const router = express.Router();
let note = require("../notes");
const slugify = require("slugify");

const {
  noteCreate,
  noteList,
  noteUpdate,
  // noteDelete,
} = require("../controllers/noteController");

//list
router.get("/", noteList);
// create
router.post("/", noteCreate);
//update
router.put("/:noteId", noteUpdate);

// //delete
// router.delete("/:noteId", noteDelete);

module.exports = router;
