const express = require('express');
const bodyPaser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const PORT = 3500;
require('dotenv').config();
const app = express()

app.use(bodyPaser.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 14
    },
    secret: process.env.SESSION_SECRET
}))
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.listen(PORT, () => console.log(`${PORT} people dancing in the moonlight`))