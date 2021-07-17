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
          isEmail: true,
          // Examples of custom validators:
          isEmail: {
            message: "Debería ser un email"
          }
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

    },
    { timestamps: false }
  );
};
