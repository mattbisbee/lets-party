import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Let's Party</h1>
        <Typed
          className="typed-text"
          strings={["Drinks", "Cookies", "Deseret", "GiftBasket"]}
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
