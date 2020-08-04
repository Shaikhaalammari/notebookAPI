const express = require("express");
const router = express.Router();
let noteBook = require("../noteBook");
const slugify = require("slugify");

const {
  noteBookCreate,
  noteBookList,
  noteBookUpdate,
  noteBookDelete,
} = require("../controllers/noteBookController");

//list
router.get("/", noteBookList);
// create
router.post("/", noteBookCreate);
//update
router.put("/:noteBookId", noteBookUpdate);
//delete
router.delete("/:noteBookId", noteBookDelete);

module.exports = router;
