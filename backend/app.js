const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const URI = require('uri-js');

const categoryRouter  = require('./routers/category.router')

require("dotenv/config");

mongoose.connect(URI.serialize(URI.parse(process.env.CONNECTION_STRING)), {
    dbName: 'eshop',
})
    .then(() => console.log('database connected'))
    .catch(er => console.log(er));

const environment = process.env;

const app = express();

app.use(express.json());

app.use(morgan('tiny'))

app.use("/categories", categoryRouter);

app.listen(environment.PORT || 2000, () => {
  console.log(`up and running on port ${environment.PORT || 2000}`);
});
