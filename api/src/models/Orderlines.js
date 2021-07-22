const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "orderlines",
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // productId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   foreignKey: true,
      // },
      // orderId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   foreignKey: true,
      // }
    },

    { timestamps: false }
  );
};
