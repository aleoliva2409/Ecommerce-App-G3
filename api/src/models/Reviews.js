const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("reviews", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT
    },
  },
  { timestamps: false }
  )
}
