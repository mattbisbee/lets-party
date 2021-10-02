import React from "react";
import ReviewsCarousel from "./ReviewsCarousel";

//renders the review section on the homepage
const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Happy Customers</h1>
      <div className="container">
        <div className="rev-content">
          <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
