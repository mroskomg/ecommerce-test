import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCartVisibility } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ setCartVisibility, itemCount }) => (
  <div className="cart-icon" onClick={setCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  setCartVisibility: () => dispatch(setCartVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
