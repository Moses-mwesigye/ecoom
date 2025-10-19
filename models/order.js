import mongoose from 'mongoose'

const { Schema } = mongoose

const ItemSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  cartQuantity: Number
}, { _id: false })

const OrderSchema = new Schema({
  items: { type: [ItemSchema], default: [] },
  total: { type: Number, default: 0 },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
  payment: {
    provider: String,
    imagePath: String,
    uploadedAt: Date
  }
})

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)

export default Order
