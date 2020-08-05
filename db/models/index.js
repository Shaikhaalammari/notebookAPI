const Notebook = require("./Notebook");
const Note = require("./Note");
const note = require("../../notes");

//a notebook has many notes

Notebook.hasMany(Note, {
  foreignKey: { fieldName: "noteBookId", allowNull: false },
});
Note.belongsTo(Notebook, { as: "noteBook" });

// tag . belongsToMany (Note ,{ through : "tagsNote"

// })

// note.belongsToMany (tag, {through: "tagsNote"})

module.exports = {
  Notebook,
  Note,
};
