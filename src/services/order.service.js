const Order = require('../models/order.model');
const CartService = require('./cart.service');

class OrderService {
    constructor(userId) {
        this.userId = userId;
    }

    async createOrder(paymentDetails) {
        const cartService = new CartService(this.userId);
        const items = await cartService.getCartItems();

        const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

        const order = new Order({
            userId: this.userId,
            items,
            totalAmount,
            paymentDetails,
        });

        return order.save();
    }

    async getOrderById(orderId) {
        return Order.findById(orderId);
    }
}

module.exports = OrderService;