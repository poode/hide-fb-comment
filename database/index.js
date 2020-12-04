const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hideComment', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('mongo db is connected'))
  .catch(console.log);

