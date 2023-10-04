import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Checkout from "./pages/checkout/Checkout";
import OrderConfirmation from "./pages/order-confirmation/orderConfirmation"

import { CartProvider } from './utils/cartContext'; 
import { setContext } from "@apollo/client/link/context";
// import SingleProduct from "./pages/singleProduct/singleProduct";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
      <div>
        <div>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
             
            </Routes>
          </Router>
        </div>
        <ToastContainer />
      </div>
      </CartProvider>
    </ApolloProvider>
  );
}

export default App;
