const express = require('express');
const OrderController = require('../controllers/order.controller');
const router = express.Router();

router.post('/', OrderController.placeOrder);
router.get('/:orderId', OrderController.getOrderDetails);

module.exports = router;
