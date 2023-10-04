import React, { useEffect, useState } from "react";
import { useCartContext } from "../../utils/cartContext";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Products.css";
import Cart from "../../pages/cart/Cart";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//device responsive
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// function handleAddToCart(product) {
//   console.log(`Added ${product.name} to the cart`);
//   console.log(product);
// }

const showToastMessage = () => {
  toast.success("Added to Cart", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

function ProductList({ filter }) {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { cart, addToCart } = useCartContext();

  // const products = data?.products || [];

  const products = useMemo(() => {
    if (!data) {
      return [];
    }
    if (!data.products) {
      return [];
    }
    if (filter && filter.name) {
      return data.products.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(filter.name.toLocaleLowerCase())
      );
    }

    return data.products;
  }, [data, filter]);

  // Handle adding a product to the cart state
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to the cart`);
    console.log(product);
    // const updatedCart = [...cart];
    // const existingProductIndex = updatedCart.findIndex((item) => item._id === product._id);

    // if (existingProductIndex !== -1) {
    //   updatedCart[existingProductIndex].quantity += 1;
    // } else {
    //   updatedCart.push({ ...product, quantity: 1 });
    // }

    addToCart(product);
    showToastMessage();
  };
  console.log(cart);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-12">
      <Carousel responsive={responsive}>
        {products?.map((product, i) => {
          return (
            <motion.div onClick={() => setIsOpen(!isOpen)} className="card">
              <img className="image" src={product.image} alt="image" />
              <motion.h2>{product.name}</motion.h2>
              {isOpen && (
                <motion.div>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                </motion.div>
              )}
              <button onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={30} /> Add to Cart{" "}
              </button>
            </motion.div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductList;
