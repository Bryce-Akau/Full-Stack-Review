const express = require('express');
const massive = require('massive');
const axios = require('axios');
const session = require('express-session');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = 3500;
const authController = require('./controllers/authController');

const app = express();
app.use(bodyParser.json());
app.use(session({
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14,
  },
  secret: process.env.SESSION_SECRET,
}));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
});
//Auth0 
app.get('/callback', authController.login);
app.get('/api/user', authController.getUser);
app.post('/api/logout', authController.logout);
app.put('/api/user', authController.editProfile)
app.listen( PORT, () => console.log( `${PORT} people dancing in the moonlight` ))