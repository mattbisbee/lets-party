import React from "react";
import ReviewsCarrousel from "./ReviewsCarrousel";

const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Happy Customers</h1>
      <div className="container">
        <div className="rev-content">
          <ReviewsCarrousel />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
