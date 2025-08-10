import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Order from './models/order.js';

const app = express();
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.send('Order API is running');
});

// Connect to MongoDB with error handling
mongoose.connect('mongodb+srv://mwesigyedev:ecommerce256@cluster0.ki1soow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

// Submit order endpoint
app.post('/products/submit-order', async (req, res) => {
  try {
    const order = new Order({ items: req.body.items });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit order.' });
  }
});

// Get order by ID
app.get('/products/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found.' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order.' });
  }
});
