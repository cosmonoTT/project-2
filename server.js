// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

const mongoURI = "mongodb://127.0.0.1:27017/products";

async function connectToMongo() {
  try {
    mongoose.connect(mongoURI);
    console.log("connected to mongoose");
  } catch (err) {
    console.error(err);
  }
}

connectToMongo();

// I.N.D.U.C.E.S

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
