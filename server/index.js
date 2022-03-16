const express = require('express');
const config = require('../config');
const PORT = config.server.port;
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Outfit = require('../database/index');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static('client/dist'));

app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  Outfit.findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});