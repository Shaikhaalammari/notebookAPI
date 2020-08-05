let noteBooks = require("../noteBook");
const slugify = require("slugify");

exports.fetchNoteBook = async (noteBookId, next) => {
  try {
    const noteBook = await noteBook.findByPk(noteBookId);
    return noteBook;
  } catch (error) {
    next(error);
  }
};
exports.noteBookCreate = (req, res, next) => {
  try {
    const id = noteBooks[noteBooks.length - 1].id + 1;
    const slug = slugify(req.body.name, { lower: true });
    const newNoteBook = { id, slug, ...req.body };
    noteBooks.push(newNoteBook);
    res.status(201).json(newNoteBook);
  } catch (error) {
    next(error);
  }
};

exports.noteBookList = (req, res, next) => {
  try {
    const noteBook = noteBook.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: NoteBook,
          as: "noteBooks",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    res.json({ noteBooks });
  } catch (error) {
    next(error);
  }
};

exports.noteBookUpdate = (req, res, next) => {
  const { noteBookId } = req.params;
  const foundNoteBook = noteBooks.find(
    (noteBook) => noteBook.id === +noteBookId
  );
  try {
    if (foundNoteBook) {
      for (const key in req.body) foundNoteBook[key] = req.body[key];
      res.status(204).end();
    } else {
      res.status(404).json({ message: "noteBook not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.noteBookDelete = (req, res, next) => {
  try {
    const { noteBookId } = req.params;
    const foundNoteBook = noteBooks.find(
      (notebook) => notebook.id === +notebookId
    );
    if (foundNoteBook) {
      noteBooks = noteBooks.filter((_noteBook) => _noteBook.id !== +noteBookId);
      res.status(204).end();
    } else {
      res.status(404).json({ message: " noteBook not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.noteBook;
