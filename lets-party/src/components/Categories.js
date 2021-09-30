import React from "react";
import Chocolates from "../pics/chocolates.jpg";
import Flowers from "../pics/flowers.jpg";
import Mockaroon from "../pics/mockaroon.jpg";
import Books from "../pics/books.jpg";
import Toys from "../pics/toys.jpg";
import Blankets from "../pics/blankets.jpg";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import Carmel1 from "../pics/carmel1.jpg";
import Pbuttercup from "../pics/pbuttercup.jpg";
import Truffle1 from "../pics/truffle1.jpg";
import Cakepop from "../pics/cakepop.jpg";
import Rose from "../pics/rose.jpg";
import White from "../pics/white.jpg";
import Lily from "../pics/lily.jpg";
import Sunflower from "../pics/sunflower.jpg";
import Macaroon from "../pics/macaroon.jpg";
import Pbcookie from "../pics/pbcookie.jpg";
import Chocchip from "../pics/chocchip.jpg";
import Snickerdood from "../pics/snickerdood.jpg";
import Tbear1 from "../pics/tbear1.jpg";
import Tbear2 from "../pics/tbear2.jpg";
import Tbear3 from "../pics/tbear3.jpg";
import Tbear4 from "../pics/tbear4.jpg";
import Blankred from "../pics/blankred.jpg";
import Blankblue from "../pics/blankblue.jpg";
import Notepad from "../pics/notepad.jpg";
import Blankwhite from "../pics/blankwhite.jpg";
import Blueblanket from "../pics/blueblanket.jpg";
import Purpleblanket from "../pics/purpleblanket.jpg";
import Tanblanket from "../pics/tanblanket.jpg";
import Whiteblanket from "../pics/whiteblanket.jpg";

const Categories = () => {
  //chocolates
  const openPopupboxChocolates = () => {
    const content = (
      <>
        <b>Please make your selection:</b>
        <div className="container">
          <form action="selection">
            <div className="row justify-content-start">
              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Carmel1} alt="carmel" 
                  alt="carmel"
                  loading="lazy"
                />
                <input type="checkbox" id="carmel" name="carmel" />
                <label for="carmel"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Pbuttercup}
                  alt="pbuttercup"
                  loading="lazy"
                />
                <input type="checkbox" id="peanutbutter" name="peanutbutter" />
                <label for="peanutbutter"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Truffle1}
                  alt="truffle"
                  loading="lazy"
                />
                <input type="checkbox" id="truffle" name="truffle" />
                <label for="truffle"></label>
              </div>

              <div className="col-6">
                <img 
                  className="pro-img-popupbox"
                  src={Cakepop}
                  alt="cakepop"
                  loading="lazy"
                />
                <input type="checkbox" id="cakepop" name="cakepop" />
                <label for="carmel"></label>
              </div>
            </div>
            <a href="/" className="link" onClick={() => window.open("/basket")}>
              Add to the basket
            </a>
          </form>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigChocolates = {
    titleBar: {
      enable: true,
      text: "Price: $2.99 each",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //flowers
  const openPopupboxFlowers = () => {
    const content = (
      <>
        <b>Please make your selection:</b>
        <div className="container">
          <form action="selection">
            <div className="row justify-content-start">
              <div className="col-6">
                <img 
                  className="pro-img-popupbox" 
                  src={Lily} 
                  alt="lily"
                  loading="lazy" 
                  />
                <input type="checkbox" id="lily" name="lily" />
                <label for="lily"></label>
              </div>

              <div className="col-6">
                <img 
                  className="pro-img-popupbox" 
                  src={Rose} 
                  alt="Rose"
                  loading="lazy" 
                />
                <input type="checkbox" id="rose" name="rose" />
                <label for="rose"></label>
              </div>

              <div className="col-6">
                <img 
                  className="pro-img-popupbox" 
                  src={White} 
                  alt="truffle"
                  loading="lazy" 
                />
                <input type="checkbox" id="white" name="white rose" />
                <label for="white"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Sunflower}
                  alt="sunflower"
                  loading="lazy"
                />
                <input type="checkbox" id="sunflower" name="sunflower" />
                <label for="sunflower"></label>
              </div>
            </div>
            <a className="link" onClick={() => window.open("#")}>
              Add to the basket
            </a>
          </form>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFlowers = {
    titleBar: {
      enable: true,
      text: "Price: $1.99 each",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //cookies
  const openPopupboxCookies = () => {
    const content = (
      <>
        <b>Please make your selection:</b>
        <div className="container">
          <form action="selection">
            <div className="row justify-content-start">
              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Snickerdood}
                  alt="snickerdood"
                  loading="lazy"
                />
                <input type="checkbox" id="snickerdood" name="snickerdood" />
                <label for="snickerdood"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Pbcookie}
                  alt="peanutbuttercookie"
                  loading="lazy"
                />
                <input type="checkbox" id="pbcookie" name="pbcookie" />
                <label for="pbcookie"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Chocchip}
                  alt="truffle"
                  loading="lazy"
                />
                <input type="checkbox" id="chocchip" name="chocchip" />
                <label for="chocchip"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Macaroon}
                  alt="macaroon"
                  loading="lazy"
                />
                <input type="checkbox" id="macaroon" name="macaroon" />
                <label for="macaroon"></label>
              </div>
            </div>
            <a className="link" onClick={() => window.open("#")}>
              Add to the basket
            </a>
          </form>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCookies = {
    titleBar: {
      enable: true,
      text: "Price: $4.99 each",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //books
  const openPopupboxBooks = () => {
    const content = (
      <>
        <b>Please make your selection:</b>
        <div className="container">
          <form action="selection">
            <div className="row justify-content-start">
              <div className="col-6">
                <img 
                  className="pro-img-popupbox" 
                  src={Blankblue} 
                  alt="blue"
                  loading="lazy" 
                />
                <input type="checkbox" id="blue" name="blue" />
                <label for="blue"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Blankred}
                  alt="pbuttercup"
                  loading="lazy"
                />
                <input type="checkbox" id="red" name="red" />
                <label for="red"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Blankwhite}
                  alt="truffle"
                  loading="lazy"
                />
                <input type="checkbox" id="white" name="white" />
                <label for="white"></label>
              </div>

              <div className="col-6">
                <img className="pro-img-popupbox" src={Notepad} alt="notepad" />
                <input type="checkbox" id="notepad" name="notepad" />
                <label for="notepad"></label>
              </div>
            </div>
            <a className="link" onClick={() => window.open("#")}>
              Add to the basket
            </a>
          </form>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigBooks = {
    titleBar: {
      enable: true,
      text: "Price: $5.99 each",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  ///toys
  const openPopupboxToys = () => {
    const content = (
      <>
        <b>Please make your selection:</b>
        <div className="container">
          <form action="selection">
            <div className="row justify-content-start">
              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Tbear1}
                  alt="teddybear1"
                  loading="lazy"
                />
                <input type="checkbox" id="teddybear1" name="teddybear1" />
                <label for="teddybear1"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Tbear2}
                  alt="pbuttercup"
                  loading="lazy"
                />
                <input type="checkbox" id="teddybear2" name="teddybear2" />
                <label for="teddybear2"></label>
              </div>

              <div className="col-6">
                <img className="pro-img-popupbox" src={Tbear3} alt="truffle" />
                <input type="checkbox" id="teddybear3" name="teddybear3" />
                <label for="teddybear3"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Tbear4}
                  alt="teddybear4"
                  loading="lazy"
                />
                <input type="checkbox" id="teddybear4" name="teddybear14" />
                <label for="teddybear4"></label>
              </div>
            </div>
            <a className="link" onClick={() => window.open("#")}>
              Add to the basket
            </a>
          </form>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigToys = {
    titleBar: {
      enable: true,
      text: "Price: $5.99 each",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //blankets
  const openPopupboxBlankets = () => {
    const content = (
      <>
        <b>Please make your selection:</b>
        <div className="container">
          <form action="selection">
            <div className="row justify-content-start">
              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Blueblanket}
                  alt="blue"
                  loading="lazy"
                />
                <input type="checkbox" id="blue" name="blue" />
                <label for="blue"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Whiteblanket}
                  alt="pbuttercup"
                  loading="lazy"
                />
                <input type="checkbox" id="white" name="white" />
                <label for="white"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Tanblanket}
                  alt="truffle"
                  loading="lazy"
                />
                <input type="checkbox" id="tan" name="tan" />
                <label for="tan"></label>
              </div>

              <div className="col-6">
                <img
                  className="pro-img-popupbox"
                  src={Purpleblanket}
                  alt="purple"
                  loading="lazy"
                />
                <input type="checkbox" id="purple" name="purple" />
                <label for="purple"></label>
              </div>
            </div>
            <a className="link" onClick={() => window.open("#")}>
              Add to the basket
            </a>
          </form>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigBlankets = {
    titleBar: {
      enable: true,
      text: "Price: $9.99 each",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="categories" className="pro-wrapper">
      <div className="container">
        <h1 className="text text-center">Start to make your Basket with: </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxChocolates}>
              <img 
                className="port-img" 
                src={Chocolates} 
                alt="basket1"
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxFlowers}>
              <img 
                className="port-img" 
                src={Flowers} 
                alt="basket2" 
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxCookies}>
              <img 
                className="port-img" 
                src={Mockaroon} 
                alt="basket13" 
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-image-box " onClick={openPopupboxBooks}>
              <img 
                className="port-img" 
                src={Books} 
                alt="basket4" 
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxToys}>
              <img 
                className="port-img" 
                src={Toys} 
                alt="basket5" 
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxBlankets}>
              <img 
                className="port-img" 
                src={Blankets} 
                alt="basket6" 
              />
              <div className="overflow"></div>
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigChocolates} />
      <PopupboxContainer {...popupboxConfigFlowers} />
      <PopupboxContainer {...popupboxConfigCookies} />
      <PopupboxContainer {...popupboxConfigBooks} />
      <PopupboxContainer {...popupboxConfigToys} />
      <PopupboxContainer {...popupboxConfigBlankets} />
    </div>
  );
};

export default Categories;
