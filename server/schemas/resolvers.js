const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      // We may need ({}) after.find AG

      return await Category.find({});
    },

    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const url = new URL(context.headers.referer).origin;
      await new Order({ products: args.products });
      const line_items = [];

      for (const product of args.products) {
        const product = await Product.findById(product._id);

        if (!product) {
          throw new Error("Product not found");
        }

        throw new AuthenticationError("Not logged in");
      }
    },
    // checkout: async (parent, args, context) => {
    //   if (!context.user) {
    //     throw new AuthenticationError("You need to be logged in!");
    //   }
    //   const newOrder = {
    //     purchaseDate: "",
    //     products: args.products.map((e) => {
    //       return e._id;
    //     }),
    //     total_price: 19.99,
    //     user: args.user_id,
    //   };

    //   //find order by user id

    //   const url = new URL(context.headers.referer).origin;
    //   await new Order({ products: args.products });
    //   const line_items = [];

    //   for (const product of args.products) {
    //     const product = await Product.findById(product._id);

    //     if (!product) {
    //       throw new Error("Product not found");
    //     }

    //     line_items.push({
    //       price_data: {
    //         currency: "usd",
    //         product_data: {
    //           name: product.name,
    //           description: product.description,
    //           images: [`${url}/images/${product.image}`],
    //         },
    //         unit_amount: product.price * 100, // convert price to cents
    //       },
    //     });

    //     line_items.push({
    //       price_data: {
    //         currency: "usd",
    //         product_data: {
    //           name: product.name,
    //           description: product.description,
    //           images: [`${url}/images/${product.image}`],
    //         },
    //         unit_amount: product.price * 100, // convert price to cents
    //       },
    //       quantity: product.purchaseQuantity,
    //     });
    //     const session = await stripe.checkout.sessions.create({
    //       payment_method_types: ["card"],
    //       line_items,
    //       mode: "payment",
    //       success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //       cancel_url: `${url}/`,
    //     });

    //     return { session: session.id };
    //   }
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });
    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { orders: order },
    //     });
    //     return order;
    //   }
    // },
    addOrder: async (parent, { products, total_price }, context) => {
      console.log("Products:", products);
      if (context.user) {
        const purchaseDate = new Date().toLocaleDateString(); // Get the current date
        console.log("purchaseDate:", purchaseDate);
        const userId = context.user._id; // Get the user ID from the context
    
        // Create the order
        const order = new Order({
          purchaseDate,
          products,
          total_price,
          user: userId, // Assign the user ID
        });
    
        try {
          // Save the order to the database
          await order.save();
    
          // Update the user's orders
          await User.findByIdAndUpdate(userId, {
            $push: { orders: order },
          });
    
          return order;
        } catch (error) {
          // Handle any errors that occur during order creation or database operations
          console.error('Error creating order:', error);
          throw new Error('Unable to create the order.');
        }
      } else {
        throw new Error('Authentication required to create an order.');
      }
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    // checkout order will go out here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  },
};

module.exports = resolvers;
