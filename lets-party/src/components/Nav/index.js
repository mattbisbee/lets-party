import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { PersonFill } from "react-bootstrap-icons";
import { HouseFill } from "react-bootstrap-icons";
import { CardChecklist } from "react-bootstrap-icons";
import { ChatTextFill } from 'react-bootstrap-icons';
import { DoorOpenFill } from 'react-bootstrap-icons';


import '../../index.css'
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const linkStyle = {
  margin: "5rem",
  textDecoration: "none"
};

function Nav() {
  //display Nav function
  function displayNav() {
    //if the user is signed up and logged in, the following will render
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <div
              className="collapse navbar-collapse m-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li>
                  <Link to="/" style={linkStyle}>
                    <HouseFill /> Home
                  </Link>
                </li>
                
                <li>
                  <Link to="/categoryMenu" style={linkStyle}>
                   <CardChecklist /> Categories and Basket
                  </Link>
                </li>

                <li>
                  <Link to="/contact" style={linkStyle}>
                    <ChatTextFill /> Contact
                  </Link>
                </li>

                <li>
                  <Link to="/" style={linkStyle} onClick={() => Auth.logout()}>
                    <DoorOpenFill /> Logout
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      //if the user is not signed up or signed in, the following will render
      return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
              <div className="collapse navbar-collapse m-auto" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li>
                    <Link to="/" style={linkStyle}>
                    <HouseFill /> Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/categoryMenu" style={linkStyle}>
                    <CardChecklist /> Categories and Basket
                    </Link>
                  </li>

                  <li>
                    <Link to="/signup" style={linkStyle}>
                      <PersonFill /> Signup
                    </Link>
                  </li>

                  <li>
                    <Link to="/login" style={linkStyle}>
                    <PersonFill /> Login
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" style={linkStyle}>
                      <ChatTextFill /> Contact
                    </Link>
                  </li>

                </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  //return html using the displayNav function
  return (
    <header className="flex-row px-1">
      <nav>
        {displayNav()}
      </nav>
    </header>
  );
}

export default Nav;
