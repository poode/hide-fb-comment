const passport = require('passport');
const { Strategy } = require('passport-facebook');

const config = require('../../../config');

const FacebookStrategy = Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


exports.facebookStrategy = new FacebookStrategy(
  {
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: config.FACEBOOK_CALLBACK_URL,
    profileFields: [
      'email',
      'name',
      'displayName',
      'picture' ,
      'name_format',
      'short_name',
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('accessToken', accessToken);
    done(null, { profile, accessToken });
  }
)