const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");

// I.N.D.U.C.E.S

// INDEX
router.get('/', (req, res) => {
    res.send("hello world")
})

// NEW
router.get('/new', (req, res) => {
    res.send("New Route Works")
})

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

module.exports = router;
