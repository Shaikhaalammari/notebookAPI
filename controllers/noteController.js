let note = require("../notes");
const slugify = require("slugify");
const { Notebook, Note } = require("../db/models");

exports.fetchNote = async (noteId, next) => {
  try {
    const note = await note.findByPk(noteId);
    return note;
  } catch (error) {
    next(error);
  }
};
exports.noteCreate = async (req, res, next) => {
  try {
    const newNoteBook = await Note.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

exports.noteList = async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "vendorId"] },
      include: [
        {
          model: Notebook,
          as: "noteBook",
          attributes: ["name"],
        },
      ],
    });
    res.json({ note });
  } catch (error) {
    next(error);
  }
};

exports.noteUpdate = async (req, res, next) => {
  try {
    const foundNote = Note.findByPk(noteId);
    if (foundNote) {
      await foundNote.update(req.boy);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "note not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.noteDelete = async (req, res, next) => {
  try {
    const foundNote = Note.findByPk(noteId);
    if (foundNote) {
      await foundNote.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: " note not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.note;
