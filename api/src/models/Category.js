const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
      },
      clicks: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );
};
