import { CartActions } from './index';

let cartItemId = 0;

export const addToCart = shoe => ({
   type: CartActions.ADD_TO_CART_SUCCESS,
   id: cartItemId++,
   shoe
});

export const removeItemFromCart = (id, price) => ({
   type: CartActions.REMOVE_FROM_CART,
   id,
   price
});

export const clearCart = () => ({
   type: CartActions.CLEAR_CART
});
