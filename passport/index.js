const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_CALLBACK_URL } = require('../config')
const User = require('../database/model/User');

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: FACEBOOK_CALLBACK_URL,
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ facebookId: profile.id }, function (err, user) {
      console.log(err)
      return cb(err, user);
    });
  }
));

module.exports = { facebookCallbackURL: FACEBOOK_CALLBACK_URL, passport };