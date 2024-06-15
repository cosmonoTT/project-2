const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/products.js");
const seedData = require("../models/seedData.js");

// I.N.D.U.C.E.S

// INDEX
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    console.log(allProducts);
    res.render("index.ejs", {
      products: allProducts,
    });
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
});

// NEW
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// DELETE

// UPDATE

// CREATE
router.post("/", async (req, res) => {
  // res.send("received")
  //   parsing data into booleans
  if (req.body.finishedProduct === "on") {
    req.body.finishedProduct = true;
  } else {
    req.body.finishedProduct = false;
  }

  if (req.body.addToFavorites === "on") {
    req.body.addToFavorites = true;
  } else {
    req.body.addToFavorites = false;
  }

  try {
    const createdProduct = await Product.create(req.body);
    console.log(createdProduct);
    res.redirect("/products");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close;
  }
});

// EDIT

// SHOW
router.get("/:id", async (req, res) => {
  try {
    const productId = await Product.findById(req.params.id);
    console.log(productId)
    res.render("show.ejs", {
      product: productId,
    });
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
});

// async function seedMyData(seedData) {
//     try {
//         await Product.create(seedData)
//     } catch (err) {
//         console.error(err)
//     }
//  }

// seedMyData(seedData)

module.exports = router;
