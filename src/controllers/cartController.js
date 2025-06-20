const Cart = require('../models/cart');

const getCartById = async (req, res) => {
  const cart = await Cart.findById(req.params.cid).populate('products.product');
  res.json({ status: 'success', payload: cart });
};

module.exports = { getCartById };
