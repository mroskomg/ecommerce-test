import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from "../../redux/cart/cart-actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItemToCart,
  removeItemFromCart
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchFromProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchFromProps)(CheckoutItem);
