import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>in One Basket</h1>
        <Typed
          className="typed-text"
          strings={[
            "Make your Basket with Chocolates",
            "Flowers",
            "Cookies",
            "Journals",
            "TeddyBears",
            " and or Blankets!!!",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="btn-list">
          <a href="#" className="btn-contact">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
