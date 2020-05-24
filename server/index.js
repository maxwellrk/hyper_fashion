const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
// const port = 3000;
// here is how to use dotenv to set all the environment variable
<<<<<<< HEAD
require("dotenv").config();
=======
require('dotenv').config();
>>>>>>> c8c036f99f084f494c76d24a812218b608816006
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist/')));

app.listen(PORT, () => console.log(`Server listening on ${PORT}!`));
