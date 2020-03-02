import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart-actions";

import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemDetailsContainer,
  Name,
  Price,
  QuantityContainer,
  ArrowContainer,
  ValueContainer,
  RemoveButtonContainer,
} from "./cart-item.styles";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
  clearItem,
  removeItemFromCart,
  addItemToCart,
  item,
}) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <Price>${price * quantity}</Price>
    </ItemDetailsContainer>
    <QuantityContainer>
      <ArrowContainer onClick={() => removeItemFromCart(item)}>
        &#10094;
      </ArrowContainer>
      <ValueContainer>{quantity}</ValueContainer>
      <ArrowContainer onClick={() => addItemToCart(item)}>
        &#10095;
      </ArrowContainer>
    </QuantityContainer>
    <RemoveButtonContainer onClick={() => clearItem(item)}>
      &#10005;
    </RemoveButtonContainer>
  </CartItemContainer>
);

const mapDispatchFromProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchFromProps)(CartItem);
