const express = require("express");
const mongoose = require("./configs/mongoose");
const dotenv = require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/', require("./routes/index"));

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
})