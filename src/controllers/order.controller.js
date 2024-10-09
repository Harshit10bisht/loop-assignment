const OrderService = require('../services/order.service');

// Controller to handle order-related requests
class OrderController {
    async placeOrder(req, res, next) {
        try {
            const { userId, paymentDetails } = req.body;
            const orderService = new OrderService(userId);
            const order = await orderService.createOrder(paymentDetails);
            res.status(201).json({ message: 'Order placed successfully', order });
        } catch (error) {
            next(error);
        }
    }

    async getOrderDetails(req, res, next) {
        try {
            const { orderId } = req.params;
            const orderService = new OrderService();
            const order = await orderService.getOrderById(orderId);
            res.status(200).json(order);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new OrderController();