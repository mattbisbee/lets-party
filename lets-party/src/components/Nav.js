import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { Basket3Fill } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        {/* <a className="navbar-brand" href="#"> */}
        {/* <img className="logo" src={Logo} alt="logo" />
    </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        <div
          className="collapse navbar-collapse m-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto ">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="Home"
                className="nav-link text-black text-uppercase ml-5 "
                aria-current="page"
              >
                <House />
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-black text-uppercase ml-5">
                My Account
              </a>
            </li> */}

            <li className="nav-item">
              <Link
                smooth={true}
                to="footer"
                className="nav-link text-black text-uppercase ml-5"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link text-black text-uppercase ml-5">
                {/* Sign in or Create an account */}
                <PersonFill />
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-black text-uppercase ml-5">LogOut</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase ml-5">
                <Basket3Fill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
