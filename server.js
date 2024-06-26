// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config()
const port = process.env.PORT;
const productController = require("./controllers/products");


const mongoURI = process.env.MONGOURI;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
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
