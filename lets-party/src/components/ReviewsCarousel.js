import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import User1 from "../pics/user1.jpg";
import User2 from "../pics/user2.jpg";
import User3 from "../pics/user3.jpg";

// Function for the carousel feature for the reviews
const ReviewsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infinityLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={User1} alt="John Doe" />
        <div className="myCarousel">
          <h3>John Doe</h3>
          <p className ="pCarousel">
            I really love this website, I send a basket of chocolates, flowers
            and a teddy Bear to my now girlfriend, the basket was so cute and
            she love it! Thank you guys!
          </p>
        </div>
      </>
      <>
        <img src={User2} alt="Bob Doe" />
        <div className="myCarousel">
          <h3>Bob Doe</h3>
          <p className ="pCarousel">
            I bought a basket of cookies, journals and teddy bears to my grandma
            and she was very happy about, it was delivered on time.
          </p>
        </div>
      </>
      <>
        <img src={User3} alt="Mary Doe" />
        <div className="myCarousel">
          <h3>Mary Doe</h3>
          <p className ="pCarousel">
            My mom was sick in the hospital and I couldn't visit her cuz I was
            out of Country but she received a basket of blanket, teddy bear,
            maccaroon and chocolates, I was so happy for it.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default ReviewsCarousel;
