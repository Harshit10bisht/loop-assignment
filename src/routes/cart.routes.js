const express = require('express');
const CartController = require('../controllers/cart.controller');
const router = express.Router();

router.post('/add', CartController.addToCart);
router.get('/:userId', CartController.getCartItems);

module.exports = router;
