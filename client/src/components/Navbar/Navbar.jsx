import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">SWIFTCRAFT</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="products/1">Homepage</Link>
          </div>
          <div className="item">
            <Link to="products/2">About</Link>
          </div>
          <div className="item">
            <Link to="products/3">Contact</Link>
          </div>
          <div className="item">
            <Link to="products/3">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon">
                <ShoppingCartCheckoutIcon/>
                <span>0</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
