import { CartActions } from './index';
import { TOKEN_NAMES } from '../../constants';
import { getToken, setToken } from '../../utilities/localStorage';


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

export const loadCartFromLocalStorage = () => {
   return (dispatch) => {
      const cart = JSON.parse(getToken(TOKEN_NAMES.CART)) || [];

      if (cart) {
         if (cart.length > 0) {

            let total = 0;
            cart.forEach(item => total += item.price);

            dispatch(loadCartSuccess(cart, total));
         }
      } else {

         setToken(TOKEN_NAMES.CART, []);

         dispatch(loadCartSuccess([], 0));

      }
   }
}

const loadCartSuccess = (cart, total) => ({
   type: CartActions.LOAD_CART_FROM_LOCAL_STORAGE,
   cart,
   total
});