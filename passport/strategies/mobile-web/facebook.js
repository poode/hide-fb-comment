const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

const config = require('../../../config');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

exports.facebookTokenStrategy = new FacebookTokenStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    fbGraphVersion: 'v9.0'
  }, function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
);
