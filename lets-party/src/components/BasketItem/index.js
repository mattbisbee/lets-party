import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Trash2Fill } from 'react-bootstrap-icons';
import '../Basket/style.css';

//code for individual items in basket
const BasketItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  //remove item from basket
  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  //update the quantity displayed in basket
  const onChange = (event) => {
    const value = event.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  //return html to render basket
  return (
    <div className="flex-row">
      <div className="container">
        <img
          src={`/images/${item.image}`}
          alt=""
          className="cartImage"
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty: </span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            onClick={() => removeFromCart(item)}
          >
            <Trash2Fill />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;