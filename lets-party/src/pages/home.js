import Particles from "react-particles-js";
import Header from "../components/Header";
import ReviewsCarrousel from "../components/Reviews";
import About from "../components/About";
import CategoryMenu from "../components/CategoryMenu";
// import Categories from "../components/Categories";

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
    <CategoryMenu />
    {/* <ProductList /> */}
  </>
)
}
export default Home