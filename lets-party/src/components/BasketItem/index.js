import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_BASKET, UPDATE_BASKET_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const BasketItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromBasket = item => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      _id: item._id
    });
    idbPromise('basket', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_BASKET,
        _id: item._id
      });
      idbPromise('basket', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_BASKET_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('basket', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromBasket(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;