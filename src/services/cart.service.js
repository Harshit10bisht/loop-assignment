const Cart = require('../models/cart.model');
const InventoryService = require('./inventory.service');
const ProductService = require('./product.service');

class CartService {
    constructor(userId) {
        this.userId = userId;
        this.cart = Cart.findOne({ userId }) || new Cart({ userId });
    }

    async addItem(productId, quantity) {
        const product = await ProductService.getProductById(productId);
        if (!product) throw new Error('Product not found');

        const isAvailable = await InventoryService.isAvailable(productId, quantity);
        if (!isAvailable) throw new Error('Product is out of stock');

        await this.cart.addItem(productId, quantity, product.price);
    }

    async getCartItems() {
        return this.cart.items;
    }
}

module.exports = CartService;
