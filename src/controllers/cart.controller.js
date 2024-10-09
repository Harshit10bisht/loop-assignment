const CartService = require('../services/cart.service');

// Controller to handle cart-related requests
class CartController {
    async addToCart(req, res, next) {
        try {
            const { userId, productId, quantity } = req.body;
            const cartService = new CartService(userId);
            await cartService.addItem(productId, quantity);
            res.status(200).json({ message: 'Item added to cart successfully' });
        } catch (error) {
            next(error);
        }
    }

    async getCartItems(req, res, next) {
        try {
            const { userId } = req.params;
            const cartService = new CartService(userId);
            const items = await cartService.getCartItems();
            res.status(200).json(items);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CartController();