require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server listening on port ${PORT}.`));
