const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const Reviews = require('../database/schema.js');

const app = express();
const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

app.use(express.static(PUBLIC));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/reviews/:id', (req, res) => {
  Reviews.findOne({ paddedId: req.params.id })
    .then((listing) => {
      if (listing) {
        res.status(200).send(listing);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = app;
