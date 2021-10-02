import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
// ApolloClient is a contructor function that will initialize the connection to the GraphQL API server
// InMemoryCache lets the Apollo Client instance to cache API response information
// Apollo Provider is a React component that will be used to provide data to all the other components
// createHttpLink is like middleware that allows control over how the Apollo Client makes requests
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer";
import Nav from './components/Nav';
import CategoryMenu from './components/CategoryMenu';
import ProductDetail from './pages/ProductDetail';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Particles from "react-particles-js";

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
              <Route exact path="/categoryMenu" component={CategoryMenu} />
              <Route exact path="/products/:id" component={ProductDetail} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
