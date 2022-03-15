const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const morgan = require('morgan');
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});