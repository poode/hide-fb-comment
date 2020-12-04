const mongoose = require('mongoose');
const findOrCreate = require ('mongoose-findorcreate')

const Schema = mongoose.Schema;


const UserSchema = new Schema ({
  profile: {
    id: String,
    displayName: String,
    name: {
      familyName: String,
      givenName: String,
    },
    emails: [{
      value: String
    }],
    photos: [{
      value: String
    }],
    provider: String,
    _raw: String,
    _json: {
      email: String,
      last_name: String,
      first_name: String,
      name: String,
      picture: {
        data: {
          height: Number,
          is_silhouette: Boolean,
          url: String,
          width: Number,
        }
      },
      name_format: String,
      short_name: String,
      id: String,
    },
  },
  accessToken: String,
});

UserSchema.plugin(findOrCreate);


module.exports = mongoose.model('User', UserSchema);