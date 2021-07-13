const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isadmin: {
        type: DataTypes.BOOLEAN,
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
      shippingstate: {
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
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paymentdetails: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
