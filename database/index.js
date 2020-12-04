const mongoose = require('mongoose');

const config = require('../config');
mongoose.connect(config.MONGO_DB_URL || 'mongodb://localhost:27017/hideComment', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('mongo db is connected'))
  .catch(console.log);

