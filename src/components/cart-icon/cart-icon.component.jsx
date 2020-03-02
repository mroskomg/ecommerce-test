import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCartVisibility } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ setCartVisibility, itemCount }) => (
  <CartIconContainer onClick={setCartVisibility}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  setCartVisibility: () => dispatch(setCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
