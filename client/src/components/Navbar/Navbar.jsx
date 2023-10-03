import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "phosphor-react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

const Navbar = () => {   
  return (
    <div className="navbar">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <button> <CategoryMenu /></button>
      
      
      <div className="links">
        <Link to="/login">
          <User size={32} />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
