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
        allowNull: false,
      },
      shippingState: {
        type: DataTypes.ENUM(
          "initial",
          "created",
          "processing",
          "cancelled",
          "completed"
        ),
        allowNull: false,
      },
      shippingcost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
      },
      shippingaddres: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shippingzip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shippingcity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paymentdetails: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
    ,
  );
};
