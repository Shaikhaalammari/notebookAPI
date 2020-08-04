let noteBooks = require("../noteBook");
const slugify = require("slugify");

exports.noteBookCreate = (req, res) => {
  const id = noteBooks[noteBooks.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newNoteBook = { id, slug, ...req.body };
  noteBooks.push(newNoteBook);
  res.status(201).json(newNoteBook);
};

exports.noteBookList = (req, res) => {
  res.json({ noteBooks });
};

exports.noteBookUpdate = (req, res) => {
  const { noteBookId } = req.params;
  const foundNoteBook = noteBooks.find(
    (noteBook) => noteBook.id === +noteBookId
  );
  if (foundNoteBook) {
    for (const key in req.body) foundNoteBook[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "noteBook not found" });
  }
};

exports.noteBookDelete = (req, res) => {
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
};

exports.noteBook;
