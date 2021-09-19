import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Nav from "./components/Navbar";

function App() {
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
              type: "starts",
              stroke: {
                width: 6,
                color: "#ea33ff",
              },
            },
          },
        }}
      />
      <Nav />
      <Header />
    </>
  );
}

export default App;
