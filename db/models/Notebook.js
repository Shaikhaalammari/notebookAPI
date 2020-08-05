const { DataTypes, Model } = require("sequelize");
const db = require("../db");
class Notebook extends Model {}

Notebook.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Notebook;
