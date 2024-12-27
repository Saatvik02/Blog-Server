const mongoose = require("mongoose");

const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl);

const db = mongoose.connection;

db.once('open', ()=>{
  console.log("Connected to database")
})

db.on('error', console.error.bind(console, "Error in DB Connection"))

module.exports = db;