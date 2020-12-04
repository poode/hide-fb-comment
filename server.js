const express = require('express');
const passport = require('passport');

 require('./database');
const config = require('./config');
const router = require('./router');

const app = express();
app.locals.port = config.PORT;

app.use(express.json());
app.use(passport.initialize());
// app.use((req, res, next) => {
//   console.log('REQUEST', req)
//   next();
// })
app.use(router);

module.exports = { app };