import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const linkStyle = {
  textDecoration: "none",
  color: "hotpink"
};

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="container my-1">
      <Link style={linkStyle} to={`/products/${_id}`} >
        <img
          alt={name}
          src={`/images/${image}`}
          className="productImage"
        />
        <p className="categoryPara">{name}</p>
      </Link>
      <div>
        <div> {("item", quantity)} in stock</div>
        <span>${price}</span>
        <br></br>
      <button onClick={addToCart} class="btn btn-primary">Add to Basket</button>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default ProductItem;
