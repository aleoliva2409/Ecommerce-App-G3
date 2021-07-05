const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "category",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
