const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const URI = require('uri-js');

require("dotenv/config");

mongoose.connect(URI.serialize(URI.parse(process.env.CONNECTION_STRING)), {
    dbName: 'eshop',
    
})
    .then(() => console.log('connected'))
    .catch(er => console.log(er));

const environment = process.env;

const app = express();

app.use(express.json());

app.use(morgan('tiny'))

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(environment.PORT || 2000, () => {
  console.log(`up and running on port ${environment.PORT || 2000} with ${console.log(process.env)}`);
});
