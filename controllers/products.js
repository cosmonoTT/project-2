// Dependencies
const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");
const seedData = require("../models/seedData.js");

// I.N.D.U.C.E.S

// INDEX
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    // console.log(allProducts);
    res.render("index.ejs", {
      products: allProducts,
    });
  } catch (err) {
    console.error(err);
  }
});

// INDEX FOR FAVORITES
router.get('/favorites', (req, res) => {
  res.render('favorites.ejs')
})

// NEW
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    // console.log(deletedProduct);
    res.redirect("/products");
  } catch (err) {
    console.error(err);
  }
});

// UPDATE
router.put("/:id/", async (req, res) => {
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
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/products");
  } catch (err) {
    console.error(err);
  }
});

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
    // console.log(createdProduct);
    res.redirect("/products");
  } catch (err) {
    console.error(err);
  }
});

// EDIT
router.get("/:id/edit", async (req, res) => {
  try {
    const selectedProduct = await Product.findById(req.params.id);
    // console.log(selectedProduct);
    res.render("edit.ejs", {
      product: selectedProduct,
    });
  } catch (err) {
    console.error(err);
  }
});

// SHOW
router.get("/:id", async (req, res) => {
  try {
    const productId = await Product.findById(req.params.id);
    // console.log(productId);
    res.render("show.ejs", {
      product: productId,
    });
  } catch (err) {
    console.error(err);
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
