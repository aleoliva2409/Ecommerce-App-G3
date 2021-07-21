const { User } = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authLogin =  async (req, res, next) => {

  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });

  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.AUTH_JWT_SECRET
  );

  res.json({ message: 'Welcome Back!', token: jwtToken });

};

module.exports = {
  authLogin

};
