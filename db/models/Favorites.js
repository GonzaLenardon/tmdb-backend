const sq = require("sequelize");
const db = require("../index.js");

class Favorites extends sq.Model {}

Favorites.init(
  {
    Movie: { type: sq.INTEGER },
  },

  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
