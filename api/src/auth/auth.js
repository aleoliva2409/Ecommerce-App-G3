const { User } = require('../db');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt

passport.use('login', new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } })
      if (!user) return done(null, false, { message: 'User not found' });

      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) return done(null, false, { message: 'Incorrect password' })

      return done(null, user, { message: 'Logged in Successfully' });

    } catch (err) {
      return done(err)
    }
  }
))

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromBodyField('token'),
  //jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
  //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.AUTH_JWT_SECRET
}, async (jwt_payload, done) => {
  try {
    const user = await User.findByPk(jwt_payload.id);
    if(!user) return done(null, false)
    else return done(null, user)
  } catch (err) {
    return done(err)
  }
}))
