const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");

// I.N.D.U.C.E.S

router.get('/', (req, res) => {
    res.send("hello world")
})

module.exports = router;
