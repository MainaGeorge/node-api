const express = require("express");

require("dotenv/config");

const environment = process.env;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(environment.PORT || 2000, () => {
  console.log(`up and running on port ${environment.PORT || 2000}`);
});
