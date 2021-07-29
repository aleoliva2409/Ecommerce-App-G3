const { User } = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require("passport");

const login = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err) return res.json(err);
      if (info) return res.json(info).status(200);

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const payload = {
          id: user.id,
          isadmin: user.isadmin,
          passwordReset: user.passwordReset,
          //exp: Math.floor(Date.now() / 1000) + 3600, //1h
          email: user.email
        }

        const token = jwt.sign(payload, process.env.AUTH_JWT_SECRET);
        return res.json({ data: { user, token } });
      })
    } catch (err) {
      return next(err)
    }
  })(req, res, next)
};

const logout = async (req, res) => {
  try {
    req.logout();
    res.json({ message: 'User logout' })
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  login,
  logout,
};
