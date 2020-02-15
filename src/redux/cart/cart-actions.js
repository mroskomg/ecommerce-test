import { CartActionTypes } from "./cart-types";

export const setCartVisibility = () => ({
  type: CartActionTypes.SET_CART_VISIBILITY
});

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});
