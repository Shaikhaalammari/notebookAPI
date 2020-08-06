let noteBooks = require("../noteBook");
const slugify = require("slugify");
const { Note, Notebook } = require("../db/models");

exports.fetchNoteBook = async (noteBookId, next) => {
  try {
    const noteBook = await Notebook.findByPk(noteBookId);
    return noteBook;
  } catch (error) {
    next(error);
  }
};
exports.noteBookCreate = async (req, res, next) => {
  try {
    const newNoteBook = await Notebook.create(req.body);
    res.status(201).json(newNoteBook);
  } catch (error) {
    next(error);
  }
};

exports.noteBookList = async (req, res, next) => {
  try {
    const notebooks = await Notebook.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Note,

          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    res.json(notebooks);
  } catch (error) {
    next(error);
  }
};

exports.noteBookUpdate = async (req, res, next) => {
  try {
    const foundNoteBook = await Notebook.findByPk(noteBookId);

    if (foundNoteBook) {
      await foundNoteBook.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "noteBook not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.noteBookDelete = async (req, res, next) => {
  try {
    const foundNoteBook = await Notebook.findByPk(noteBookId);
    if (foundNoteBook) {
      await foundNoteBook.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: " noteBook not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.noteBook;
