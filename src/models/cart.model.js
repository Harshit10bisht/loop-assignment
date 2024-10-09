const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: { type: String, required: true },
    items: [
        {
            productId: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
});

// Add methods to Cart Schema
cartSchema.methods.addItem = function (productId, quantity, price) {
    const itemIndex = this.items.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
        this.items[itemIndex].quantity += quantity;
    } else {
        this.items.push({ productId, quantity, price });
    }
    return this.save();
};

module.exports = mongoose.model('Cart', cartSchema);