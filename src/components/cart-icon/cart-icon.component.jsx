import React from "react";
import { connect } from "react-redux";

import { setCartVisibility } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ setCartVisibility }) => (
  <div className="cart-icon" onClick={setCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setCartVisibility: () => dispatch(setCartVisibility())
});

export default connect(null, mapDispatchToProps)(CartIcon);
