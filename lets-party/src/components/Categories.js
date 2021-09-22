import React from "react";
import Chocolates from "../pics/chocolates.jpg";
import Flowers from "../pics/flowers.jpg";
import Mockaroon from "../pics/mockaroon.jpg";
import Books from "../pics/books.jpg";
import Toys from "../pics/toys.jpg";
import Blankets from "../pics/blankets.jpg";

const Categories = () => {
  return (
    <div id="projects" className="pro-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center">Please choose from:</h1>
        <div className="row">
          <div class="col-md-4">
            <div className="pro-image-box">
              <img className="port-img" src={Chocolates} alt="basket1" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box">
              <img className="port-img" src={Flowers} alt="basket2" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box">
              <img className="port-img" src={Mockaroon} alt="basket13" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box ">
              <img className="port-img" src={Books} alt="basket4" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box">
              <img className="port-img" src={Toys} alt="basket5" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box">
              <img className="port-img" src={Blankets} alt="basket6" />
              <div className="overflow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
