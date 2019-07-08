require('dotenv').config();
const express = require('express');
const {generateMusickitToken} = require('./lib/musickit.js')
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) =>
  res.render('index', {musickitToken: generateMusickitToken()}));

app.listen(port, () => console.log(`Listening on port ${port}!`));
