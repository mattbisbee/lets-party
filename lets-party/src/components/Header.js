import React from "react";
import Typed from "react-typed";

//renders the header for the homepage
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
      </div>
    </div>
  );
};

export default Header;
