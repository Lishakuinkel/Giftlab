const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Christmas' },
    { name: 'Birthdays' },
    { name: 'Mothers Day' },
    { name: 'Fathers Day' },
    { name: 'Valentines day' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Orange Bracelet',
      description:
        'This dedicate bracelet is adorned with oranges and orange flowers decorated with green leaves, offering a beautiful picture of a vibrant harvest. It will fill your heart with happiness and joy when you wear it. Besides, you can complete your look by matching this bracelet with those orange necklaces, earrings and rings from our Selenichast jewelry.',
      image: 'orangebracelet.jpg',
      category: categories[2]._id,
      price: 47.00,
      quantity: 500
    },
    {
      name: 'Warm + Cozy Gift Box',
      description:
        'Cozy in a box. Enjoy everything you need for the perfect snowy night in. Spearmint &  Eucalyptus come together for a wonderfully minty bath, alongside an orange peel + clove scented candle for the perfect ambiance. Sip on some organic chai tea in our ceramic speckled mug, and then slip into some cozy cloud socks to complete the evening. Lovingly hand-packed in an elegant pink gift box complete with your personalized greeting card.',
      image: 'warmcozygiftbox.jpg',
      category: categories[2]._id,
      price: 60.00,
      quantity: 500
    },
    {
      name: 'Women Lightweight Frilly Sock 4-Pack Gift Box',
      category: categories[2]._id,
      description:'Calling all frill-seekers: these sparkly frill-topped socks are for you. They are lightweight, with no extra bulk, and plenty of supportive comfort built right in. They come in confident colors, with a bonus sparkly squiggle peeking out at the top, so you never have to worry about blending in again.',
      image: 'frillysocks.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[2]._id,
      description:
        'Each soap slice is 1 inch thick, and 3-3.5 inches tall (1.5 - 2.5 oz), and the set contains 8 sample sized bars (best sellers). ',
      image: 'soap.jpg',
      price: 40.00,
      quantity: 50
    },
    {
      name: 'Recipe Book',
      category: categories[2]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'recipebook.jpg',
      price: 38.00,
      quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
