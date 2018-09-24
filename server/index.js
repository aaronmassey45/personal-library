require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(
    () => console.info('db connected'),
    err => console.warn('db connection failed')
  );

const app = express();
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

app.use(bodyParser.json());

require('./routes/routes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server listening on port ${PORT}.`));

module.exports = app;
