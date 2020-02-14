import { CartActionTypes } from "./cart-types";

export const setCartVisibility = () => ({
  type: CartActionTypes.SET_CART_VISIBILITY
});

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
