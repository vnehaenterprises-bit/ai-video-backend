const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('API is running');
});

module.exports = app;
