import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import { setCartVisibility } from "../../redux/cart/cart-actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, totalPrice, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      {cartItems.length ? (
        <span className="cart-total">TOTAL: ${totalPrice}</span>
      ) : null}
    </div>

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(setCartVisibility());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
