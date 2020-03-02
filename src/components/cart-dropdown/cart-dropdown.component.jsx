import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { setCartVisibility } from "../../redux/cart/cart-actions";

import "./cart-dropdown.styles.scss";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
  CartTotal,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, totalPrice, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      {cartItems.length ? <CartTotal>TOTAL: ${totalPrice}</CartTotal> : null}
    </CartItemsContainer>

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(setCartVisibility());
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
