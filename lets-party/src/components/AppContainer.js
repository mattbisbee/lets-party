import React, { useState } from 'react';
import Nav from './Nav';
import Home from './tabs/Home';
import Chocolate from './tabs/AboutMe';
import Cookies from './tabs/Resume';
import Drinks from './tabs/Contact';
import GiftBasket from './tabs/GiftBasket';
import PreviousOrders from './tabs/PreviousOrders';
import ShoppingCart from './tabs/ShoppingCart';


function AppRender() {
  const [currentPage, handlePageChange] = useState('Home');
 

  const renderPage = () => {
    switch (currentPage) {
      case 'Chocolate':
        return <Chocolate />;
      case 'Cookies':
        return <Cookies />;
      case 'Drinks':
        return <Drinks />;
      case 'GiftBasket':
        return <GiftBasket />;
      case 'PreviousOrder':
        return <PreviousOrders />;
      case 'ShoppingCart':
        return <ShoppingCart />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default AppRender;