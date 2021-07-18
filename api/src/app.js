require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const passport = require("passport");
require('./auth/auth');
// const portFrontCors = process.env.PORT_FRONT_CORS || 3000;
// const baseUrl = process.env.BASE_URL;

const server = express();
server.name = "API";

// middlewares

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(morgan("dev"));


// the best way would be to put the front url, we allow any input from anywhere
//res.header("Access-Control-Allow-Origin", `${baseUrl}:${portFrontCors}`);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(passport.initialize());
server.use('/api', routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
