const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
// const port = 3000;
// here is how to use dotenv to set all the environment variable
require('dotenv').config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../dist/")));

app.listen(PORT, () => console.log(`Server listening on ${PORT}!`));
