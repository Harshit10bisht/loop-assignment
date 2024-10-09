require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/database.config');

const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');

app.use(express.json());

connectDB();

app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));