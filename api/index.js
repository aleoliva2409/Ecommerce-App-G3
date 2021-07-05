require('dotenv').config()
const server = require("./src/app");
const { sequelize } = require("./src/db")
const portBackend = process.env.PORT_BACKEND;

const connectDB = async() => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
    await server.listen(portBackend, () => {
      console.log(`Listening on PORT ${portBackend}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDB();