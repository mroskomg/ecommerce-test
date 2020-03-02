import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart-actions";

import {
  CheckoutItemContainer,
  ImageContainter,
  NameContainer,
  QuantityContainer,
  ArrowContainer,
  ValueContainer,
  PriceContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItemToCart,
  removeItemFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainter>
        <img src={imageUrl} alt='item' />
      </ImageContainter>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>${price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchFromProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchFromProps)(CheckoutItem);
