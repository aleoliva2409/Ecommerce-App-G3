const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("reviews", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    text: {
      type: DataTypes.TEXT
    }
  })
}
