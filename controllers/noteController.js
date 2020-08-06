let note = require("../notes");
const slugify = require("slugify");
const { Notebook, Note } = require("../db/models");

exports.fetchNote = async (noteId, next) => {
  try {
    const note = await Note.findByPk(noteId);
    return note;
  } catch (error) {
    next(error);
  }
};
exports.noteCreate = async (req, res, next) => {
  try {
    const newNote = await Note.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

exports.noteList = async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "notebookId"] },
      // include: [
      //   {
      //     model: Notebook,

      //     attributes: ["name"],
      //   },
      // ],
    });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

exports.noteUpdate = async (req, res, next) => {
  try {
    const foundNote = await Note.findByPk(req.params.noteId);
    if (foundNote) {
      await foundNote.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "note not found" });
    }
  } catch (error) {
    next(error);
  }
};

// exports.noteDelete = async (req, res, next) => {
//   try {
//     const foundNote = await Note.findByPk(req.params.noteId);
//     if (foundNote) {
//       await foundNote.destroy();
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: " note not found" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

exports.note;
