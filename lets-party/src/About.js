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
          <h1 className="about-heading">About</h1>
          <p className="description">
            Let's Party will help you to create the ultimate party for your next
            celebration in your office, for your family and friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
