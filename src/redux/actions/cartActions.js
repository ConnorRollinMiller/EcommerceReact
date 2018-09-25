import { CartActions } from './index';

let cartId = 0;

export const addToCart = (shoe, cart) => {
   return (dispatch) => {

      if (cart && cart.length > 0) {
         cartId = cart[ cart.length - 1 ].cartId;
      }

      ++cartId;

      dispatch(addToCartSuccess(cartId, shoe));
   }
};

const addToCartSuccess = (cartId, shoe) => ({
   type: CartActions.ADD_TO_CART,
   cartId,
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
