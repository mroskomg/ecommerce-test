import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addItemToCart } from "../../redux/cart/cart-actions";

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer {...item} />

      <CollectionFooterContainer>
        <NameContainer>{name}:</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButton
        className='custom-button'
        onClick={() => addItemToCart(item)}
        inverted>
        Add To Cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
