const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
    text: {
      type: DataTypes.TEXT
    }
  })
}
