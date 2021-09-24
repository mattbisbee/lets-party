import React from "react";
import pineapple from "../pics/pineapple.jpg";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={pineapple} alt="Pineapple" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Welcome to our page!</h1>
          <p className="description">
            Find the perfect, unique gift basket to send for every occasion. Our
            gift baskets are filled with something for everyone on your list
            from chocolates, cookies, flowers, journals, Teddy Bears and
            Blankets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
