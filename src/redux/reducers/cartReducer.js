import { CartActions } from '../actions';

const initialState = {
   cart: [],
   total: 0.00,
   errorMessage: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case CartActions.ADD_TO_CART:
         return {
            ...state,
            errorMessage: null,
            total: state.total + action.shoe.price,
            cart: [
               ...state.cart,
               {
                  cartId: action.cartId,
                  ...action.shoe
               }
            ]
         };
      case CartActions.ADD_TO_CART_FAILURE:
         return {
            ...state,
            errorMessage: action.errorMessage
         };
      case CartActions.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter(item => item.cartId !== action.id),
            total: state.total - action.price
         };
      case CartActions.CLEAR_CART:
         return {
            ...state,
            cart: [],
            total: 0.0,
            errorMessage: null
         };
      case CartActions.LOAD_CART_FROM_LOCAL_STORAGE:
         return {
            ...state,
            cart: action.cart,
            total: action.total
         }
      default:
         return state;
   }
};
