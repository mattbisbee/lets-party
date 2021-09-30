import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Basket from '../components/Basket';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_BASKET,
  UPDATE_BASKET_QUANTITY,
  ADD_TO_BASKET,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, basket } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToBasket = () => {
    const itemInBasket = basket.find((basketItem) => basketItem._id === id);
    if (itemInBasket) {
      dispatch({
        type: UPDATE_BASKET_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInBasket.purchaseQuantity) + 1,
      });
      idbPromise('basket', 'put', {
        ...itemInBasket,
        purchaseQuantity: parseInt(itemInBasket.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_BASKET,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('basket', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromBasket = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      _id: currentProduct._id,
    });

    idbPromise('basket', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && basket ? (
        <div className="container my-1">
          <Link to="/">← Home</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToBasket}>Add to Basket</button>
            <button
              disabled={!basket.find((p) => p._id === currentProduct._id)}
              onClick={removeFromBasket}
            >
              Remove from Basket
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      <Basket />
    </>
  );
}

export default Detail;
