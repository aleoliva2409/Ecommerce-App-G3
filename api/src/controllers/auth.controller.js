const { User } = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require("passport");

// const authLogin = async (req, res, next) => {
//   const { email, password } = req.body;
//   const userWithEmail = await User.findOne({ where: { email } }).catch(
//     (err) => {
//       console.log('Error: ', err);
//     }
//   );
//   if (!userWithEmail)
//     return res
//       .status(400)
//       .json({ message: 'Email or password does not match!' });
//   if (userWithEmail.password !== password)
//     return res
//       .status(400)
//       .json({ message: 'Email or password does not match!' });
//   const jwtToken = jwt.sign(
//     { id: userWithEmail.id, email: userWithEmail.email },
//     process.env.AUTH_JWT_SECRET
//   );

//   res.json({ message: 'Welcome Back!', token: jwtToken });
// };


const login = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err) return next(err);
      console.log(info)
      if (info) return res.json(info).status(500);

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const payload = {
          id: user.id,
          isadmin: user.isadmin,
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

const passwordReset = async (req, res, next) => {
  try {

  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login,
  logout,
};
