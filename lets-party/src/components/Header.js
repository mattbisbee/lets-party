import React from "react";
import Typed from "react-typed";
import Categories from "./Categories";

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
            "Teddy Bears",
            "Blankets",
            "Baby Showers",
            "Office Parties",
            "Birthdays"
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="btn-list">
          <a href={Categories} className="btn-contact">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
