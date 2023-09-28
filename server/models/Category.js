const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {

    type: String, 
    required: true

  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    // product: products[0]._id,
    required: true
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;