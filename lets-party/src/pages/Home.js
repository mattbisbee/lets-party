import Particles from "react-particles-js";
import Header from "../components/Header";
import ReviewsCarrousel from "../components/Reviews";
import About from "../components/About";

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
    <ReviewsCarrousel />
  </>
)
}
export default Home
