const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.render('products', { products });
});

module.exports = router;
