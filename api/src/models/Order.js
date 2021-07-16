const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      orderState: {
        type: DataTypes.ENUM(
          "processing",
          "cancelled",
          "pending",
          "completed",
          "cart"
        ),
        defaultValue: "cart",
        allowNull: true,
      },
      shippingState: {
        type: DataTypes.ENUM(
          "initial",
          "created",
          "processing",
          "cancelled",
          "completed"
        ),
        allowNull: true,
      },

      shippingCost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
      },
      shippingAddres: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shippingZip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shippingCity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paymentDetails: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cart: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      }
    },
    { timestamps: true }
    ,
  );
};
