import React from "react";
import { Facebook } from "react-bootstrap-icons";
import { Google } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Reddit } from "react-bootstrap-icons";
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="row align-items-start">
            <div className="col">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </div>
            <div className="col">
              <a
                href="mailto:carinvid@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Google />
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.reddit.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Reddit />
              </a>
            </div>
          </div>
        </div>

        <p className="pt-3 text-center">
          Copyright&copy; {new Date().getFullYear()}&nbsp; In One Basket | All
          Rights Reserved
        </p>
        <p className="pt-3 text-center"> Site Icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
