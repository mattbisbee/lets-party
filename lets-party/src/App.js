import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';

//import Particles from "react-particles-js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./pages/Footer";
import Nav from './components/Nav';
import Categories from './components/Categories';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/product/:id" component={Product} />
              <Route exact path="/categories" component={Categories} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
