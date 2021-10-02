import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import BasketItem from '../BasketItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { Basket3Fill } from "react-bootstrap-icons";
require("dotenv").config();


const stripePromise = process.env.stripePromise;


const Basket = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  //useEffect for checkout and stripe
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // useEffect for adding to cart
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  //function to calculate the total price for the items in the basket
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }
  //Checkout with all items in cart
  function submitCheckout() {
    const productIds = [];

    //for loop over items in cart
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }
  //code to display minimized basket
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <br></br>
        <span role="img" aria-label="trash">
          <Basket3Fill />
          <br></br>
          Your Custom Basket
        </span>
      </div>
    );
  }
  //return html for complete render of all items in basket
  return (
    <div className="cart">
      <br></br>
      <h2>Basket</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <BasketItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            <br></br>
            {Auth.loggedIn() ? (
              <button className="btn btn-primary btn-lg" onClick={submitCheckout}>Checkout</button>
            ) : (
              <span> (Please log in to purchase)</span>
            )}
            <br></br>
            <button className="btn btn-primary btn-lg" onClick={toggleCart}>
              Minimize Basket
            </button>
          </div>
        </div>
      ) : (
        //display a message for an empty basket
        <h3>
          Add items to your custom Gift Basket!
        </h3>
      )}
    </div>
  );
};

export default Basket;
