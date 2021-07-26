const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "model",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }
  );
};
