const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

require('./server/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));