import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  cartQuantity: Number
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
