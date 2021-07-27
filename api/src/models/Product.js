const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sizeMattress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
