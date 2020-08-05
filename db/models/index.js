const Notebook = require("./Notebook");
const Note = require("./Note");

//a notebook has many notes

Notebook.hasMany(Note, {
  foreignKey: { fieldName: "noteBookId", allowNull: false },
});
Note.belongsTo(Notebook, { as: "noteBook" });

module.exports = {
  Notebook,
  Note,
};
