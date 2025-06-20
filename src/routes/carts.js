const express = require('express');
const { getCartById } = require('../controllers/cartController');
const router = express.Router();

router.get('/:cid', getCartById);

module.exports = router;
