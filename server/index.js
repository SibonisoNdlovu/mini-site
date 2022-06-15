require('dotenv').config();
const userRoute = require('./routes/users.route');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: '50mb' }));

app.use('*', userRoute);

module.exports = app;
