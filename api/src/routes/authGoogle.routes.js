const server = require("express").Router();
//const server = require('../app')
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { User } = require("../db.js");

const { AUTH_JWT_SECRET } = process.env;
/// ESTRATEGIA GOOGLE ///
server.get('/login/google', passport.authenticate('google', {scope: ["profile", "email"],}));

server.get("/login/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user) => {    console.log("ENTRE A AUTHENTICATE: ")
    if (err) return next(err);
    if (!user) {
      res.redirect(`http://localhost:3000/login?error=401`);
    } else {
      const token = jwt.sign(user.toJSON(), AUTH_JWT_SECRET);
      res.redirect(`http://localhost:3000/?loginGoogle=true&t=${token}`);
    }
  })(req, res, next);
});
 
module.exports = server;