import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>About</h1>
          <span>
            This is our project based on MERN Stack
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Have any problems or quaries?<br />
            You can contact us anytime!!!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">JK Mobiles</span>
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
