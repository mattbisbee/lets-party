import Particles from "react-particles-js";
import Header from "../components/Header";
import ReviewsCarrousel from "../components/Reviews";
import Categories from "../components/Categories";
import About from "../components/About";
import Products from "../pages/Product"


function Home(){
return (
    <>
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              color: "#ea33ff",
            },
          },
        },
      }}
    />
    <Header />
    <About />
    <Categories />
    {/* <Products /> */}
    <ReviewsCarrousel />
  </>
)
}
export default Home