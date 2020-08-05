let note = require("../notes");
const slugify = require("slugify");
const { Notebook } = require("../db/models");

exports.fetchNote = async (noteId, next) => {
  try {
    const note = await note.findByPk(noteId);
    return note;
  } catch (error) {
    next(error);
  }
};
exports.noteCreate = (req, res, next) => {
  try {
    const id = note[note.length - 1].id + 1;
    const slug = slugify(req.body.name, { lower: true });
    const newNote = { id, slug, ...req.body };
    note.push(newNote);
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

exports.noteList = async (req, res, next) => {
  try {
    const notes = await note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "vendorId"] },
      include: [
        {
          model: Notebook,
          as: "noteBook",
          attributes: ["note"],
        },
      ],
    });
    res.json({ note });
  } catch (error) {
    next(error);
  }
};

exports.noteUpdate = (req, res, next) => {
  try {
    const { noteId } = req.params;
    const foundNote = note.find((note) => note.id === +noteId);
    if (foundNote) {
      for (const key in req.body) foundNote[key] = req.body[key];
      res.status(204).end();
    } else {
      res.status(404).json({ message: "note not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.noteDelete = (req, res, next) => {
  try {
    const { noteId } = req.params;
    const foundNote = note.find((note) => note.id === +noteId);
    if (foundNote) {
      note = note.filter((_note) => _note.id !== +noteId);
      res.status(204).end();
    } else {
      res.status(404).json({ message: " note not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.note;
