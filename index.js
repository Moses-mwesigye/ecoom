const express = require('express'); // must
const app = express(); // must
const mongoose = require('mongoose'); // Database // must
const productsRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
require('dotenv').config(); // must

app.use(express.json()); // for JSON body parsing
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // must

// usage routes
app.use('/products', productsRoutes);
app.use('/backecom', adminRoutes);

// --- Order model and submit order route ---
const Order = require('./models/order');

app.post('/products/submit-order', async (req, res) => {
  try {
    const order = new Order({ items: req.body.items });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit order.' });
  }
});

app.get('/products/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found.' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order.' });
  }
});

app.listen(8000, () => {
  console.log('listening on port 8000'); // must
});