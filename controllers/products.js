const express = require("express");
const mongoose = require('mongoose')
const router = express.Router();
const Product = require("../models/products.js");
const seedData = require("../models/seedData.js")

// I.N.D.U.C.E.S

// INDEX
router.get("/", async (req, res) => {
    const allProducts = await Product.find({})
  res.render("index.ejs", {
    products: allProducts
  })
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
    const createdProduct = await Product.create(req.body)
    console.log(createdProduct)
    res.redirect('/products')
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.connection.close
  }
});

// EDIT

// SHOW

// async function seedMyData(seedData) {
//     try {
//         await Product.create(seedData)
//     } catch (err) {
//         console.error(err)
//     }
//  }

// seedMyData(seedData)

module.exports = router;
