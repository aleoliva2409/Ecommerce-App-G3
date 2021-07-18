require('dotenv').config()
const server = require("./src/app");
const { sequelize } = require("./src/db")
const initDb = require('./src/initDB')
const orderInitTest = require("./src/ordersInitTest")

// TESTING USER
const setUser = require('./src/UserInitTest');
// ---------------------

const connectDB = async() => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
    await server.listen(process.env.PORT, () => {
      console.log(`Listening on PORT ${process.env.PORT}`);
    });
    initDb();
    setUser();
    orderInitTest();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDB();
