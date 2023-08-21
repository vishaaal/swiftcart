import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            SwiftCraft: Your Premier Destination for Indian Fashion. Dive into
            an exquisite collection of trendy outfits, accessories, and more,
            blending contemporary style with India's rich textile heritage. Shop
            at SwiftCraft and redefine your fashion statement!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Salt Lake, Sec V, <br/>
            Kolkata-59, West Bengal<br/>India<br/>
            swiftcraft@helpdesk.com <br/>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">swiftcart</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
