import React from "react";
import basket5 from "../pics/basket5.jpg";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={basket5} alt="Pineapple" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Welcome to our page!</h1>
          <p className="description">
            Find the perfect, unique gift basket to send for every occasion. Our
            gift baskets are filled with something for everyone on your list
            from chocolates, cookies, flowers, journals, Teddy Bears and
            Blankets. The only thing you need to add is a lot of Love!!!.
          </p>
          <p className="deli">WE DELIVER!!!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
