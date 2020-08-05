const { DataTypes, Model } = require("sequelize");
const db = require("../db");
class Note extends Model {}

Note.init(
  {
    notebook: {
      type: DataTypes.STRING,
    },

    note: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Note;
