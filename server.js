// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const port = 4000;
const productController = require("./controllers/products");

const mongoURI = "mongodb://127.0.0.1:27017/products";

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use("/products", productController);

async function connectToMongo() {
  try {
    mongoose.connect(mongoURI);
    console.log("connected to mongoose");
  } catch (err) {
    console.error(err);
  }
}

connectToMongo();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
