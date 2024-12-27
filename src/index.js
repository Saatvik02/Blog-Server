const express = require("express");
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectFlash = require('connect-flash');
const cors = require('cors');

const mongoose = require("./configs/mongoose");
const app = express();
const PORT = 8000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

app.use(cookieParser());
app.use(connectFlash());

app.use('/', require("./routes/index"));

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
})