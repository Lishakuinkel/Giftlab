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
<<<<<<< HEAD
    // required: true

  },
  // product: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Product',
  //   required: true
  // },
=======
   
  },
   
>>>>>>> developed
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;