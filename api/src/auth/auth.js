const { User } = require('../db');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt
const server = require("express").Router();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use('login', new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } })
      if (!user) return done(null, false, { message: 'User not found' });

      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) return done(null, false, { message: 'Incorrect password' })

      return done(null, user);

    } catch (err) {
      return done(err)
    }
  }
))

passport.use(new JwtStrategy({
  //jwtFromRequest: ExtractJwt.fromBodyField('token'),
  //jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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

/// ESTRATEGIA GOOGLE ///
passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/api/authGoogle/login/google/callback',
    session: false
  },
    async function (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, profile, done) {
      try {
        const user = {
          email: profile._json.email,
          isadmin: false,
          password: 'Mm,SHtBBW]j5*%`'
        }
        const foundUser = await User.findOne({ where: { email: user.email } })
        if (foundUser) {
          const updatedUser = await foundUser.update(user);
          done(null, updatedUser)
        }
        else {
          const createdUser = await User.create(user)
          done(null, createdUser)
        }
      } catch (err) {
        done(err, null)
      }
    }
  )
);
