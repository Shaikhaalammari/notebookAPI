const Notebook = require("./Notebook");
const Note = require("./Note");
const note = require("../../notes");

//a notebook has many notes

Notebook.hasMany(Note, {
  allowNull: false,
});
Note.belongsTo(Notebook);

// tag . belongsToMany (Note ,{ through : "tagsNote"

// })

// note.belongsToMany (tag, {through: "tagsNote"})

module.exports = {
  Notebook,
  Note,
};
