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
    },
  );
};
