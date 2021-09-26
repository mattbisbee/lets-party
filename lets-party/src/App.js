import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Nav from "./components/Nav";
import Header from "./components/Header";
import MyAccount from "./components/MyAccount";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Cart from "./pages/cart"

function App() {
  return (
  
     <Router>
       <Route  exact path = "/" component = {Home} />
       <Route  exact path = "/contact" component = {Contact} />
       <Route  exact path = "/cart" component = {Cart} />
     </Router>
  );
}

export default App;
