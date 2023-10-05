const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Birthdays' },
    { name: 'Christmas' },
    { name: 'Fathers Day' },
    { name: 'Mothers Day' },
    { name: 'Valentines day' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Warm + Cozy Gift Box',
      category: categories[3]._id,
      description:
        'Cozy in a box. Enjoy everything you need for the perfect snowy night in. Spearmint & Eucalyptus come together for a wonderfully minty bath, alongside an orange peel + clove scented candle for the perfect ambiance. Sip on some organic chai tea in our ceramic speckled mug, and then slip into some cozy cloud socks to complete the evening. Lovingly hand-packed in an elegant pink gift box complete with your personalized greeting card.',
      image: 'warmcozygiftbox.jpg',
      price: 60.00,
      quantity: 500
    },
    {
      name: 'Plush Love Bear',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'heartBear.jpg',
      category: categories[4]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Merry Christmas Greeting Card ',
      category: categories[1]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'greetingcard.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Decorative Christmas Wreath',
      category: categories[1]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'Wreath.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Love Baloon',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'love-baloon.jpg',
      category: categories[4]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Cake for DAD#1',
      category: categories[2]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'cake.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Classic Watch Gift',
      category: categories[2]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'watch.jpeg',
      price: 38.00,
      quantity: 100
    },
    {
      name: 'LOVE Lamp Sign',
      category: categories[4]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'LOVElamp.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Recipe Book',
      category: categories[3]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'recipebook.jpg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Love Ornaments',
      category: categories[4]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'loveOrnament.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Logs Gift Basket',
      category: categories[1]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'giftbasket2.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'LOVE Sign Stacked',
      category: categories[4]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'LOVEstacked.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Box of Strawberies',
      category: categories[4]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'love-Strawberies.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Mens Ugly Sweater Print Sweatshirt',
      category: categories[1]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'uglysweater.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Neon Sign',
      category: categories[4]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'neon_iheartu.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Plush Heart',
      category: categories[4]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'plush-heart.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Orange Bracelet',
      category: categories[3]._id,
      description:
        'This dedicate bracelet is adorned with oranges and orange flowers decorated with green leaves, offering a beautiful picture of a vibrant harvest. It will fill your heart with happiness and joy when you wear it. Besides, you can complete your look by matching this bracelet with those orange necklaces, earrings and rings from our Selenichast jewelry.',
      image: 'orangebracelet.jpg',
      price: 47.00,
      quantity: 500
    },
   
    {
      name: 'Frilly Socks 4-Pack Gift Box',
      category: categories[3]._id,
      description:
        'Calling all frill-seekers: these sparkly frill-topped socks are for you. They are lightweight, with no extra bulk, and plenty of supportive comfort built right in. They come in confident colors, with a bonus sparkly squiggle peeking out at the top, so you never have to worry about blending in again.',
      image: 'frillysocks.jpeg',
      price: 7.99,
      quantity: 50
    },
    {
      name: 'Handmade Soap',
      category: categories[3]._id,
      description:
        'Each soap slice is 1 inch thick, and 3-3.5 inches tall (1.5 - 2.5 oz), and the set contains 8 sample sized bars (best sellers).',
      image: 'handmadesoap.jpg',
      price: 40.00,
      quantity: 50
    },
    
   
        
    {
      name: 'Red Holiday Cheer Basket',
      category: categories[1]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'giftbasket.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Christmas Tree Card',
      category: categories[1]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'Tree.jpeg',
      price: 38.00,
      quantity: 100
    }, 
   
   
  
    {
      name: 'Gift Basket for Father',
      category: categories[2]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'giftbasketfather.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Fathers Day Card',
      category: categories[2]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'fathersdaycard.jpeg',
      price: 38.00,
      quantity: 100
    }, 
    {
      name: 'Buttoned Shirt Gift',
      category: categories[2]._id,
      description:
        'Scribble. Sauté. Savour. Take your culinary memories from plate to page with our recipe journals. Dream up new dishes or remember family favorites. And for days you dont want to wear the chefs hat',
      image: 'shirt.webp',
      price: 38.00,
      quantity: 100
    },
    {
      name: 'Tech Kit Organizer',
      category: categories[0]._id,
      description:
        'A stylish, compact organizer featuring multiple compartments, pockets, and elastic loops to keep your electronic essentials neatly organized and within reach.',
      image: 'tech-kit.png',
      price: 30.00,
      quantity: 100
    },
    {
      name: 'Birth Month Candle',
      category: categories[0]._id,
      description:
        'A thoughtful and aromatic gift to celebrate a birthday, each candle crafted with care, a beautifully designed label, and infused with a fragrance that captures the essence of the birth month.',
      image: 'bdaycandle.png',
      price: 25.99,
      quantity: 100
    },
    {
      name: 'Portable Bluetooth Speaker',
      category: categories[0]._id,
      description:
        'Take your music on the go with this Portable Bluetooth Speaker, designed for exceptional audio quality and portability.',
      image: 'speaker.png',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Wireless Charging Station',
      category: categories[0]._id,
      description:
        'Designed to simplify your daily charging needs and keep your devices powered up effortlessly, equipped with multiple charging pads to streamline your charging routine.',
      image: 'wirelesscharging.png',
      price: 35.99,
      quantity: 100
    },
    {
      name: 'Birthday Cake Toppers',
      category: categories[0]._id,
      description:
        'Delightful decorations as the perfect finishing touch to your birthday cake, adding a touch of elegance and festivity to the occasion, crafted from food-safe and non-toxic materials.',
      image: 'bdaycaketop.png',
      price: 5.99,
      quantity: 100
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'Pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[4]._id, products[4]._id, products[4]._id]
      }
    ]
  });

  await User.create({
    username: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
