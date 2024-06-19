const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  finishedProduct: Boolean,
  timeLasted: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
