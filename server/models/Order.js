const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  total_price: {
    type: Number,
    required: true,
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;