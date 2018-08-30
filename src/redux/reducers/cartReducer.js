import { CartActions } from '../actions';

const initialState = {
   cart: [],
   total: 0.0,
   errorMessage: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case CartActions.ADD_TO_CART_SUCCESS:
         return {
            ...state,
            errorMessage: null,
            total: state.total + action.shoe.price,
            cart: [
               ...state.cart,
               {
                  id: action.id,
                  shoe: action.shoe
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
            cart: state.cart.filter(item => item.id !== action.id),
            total: state.total - action.price
         };
      case CartActions.CLEAR_CART:
         return {
            ...state,
            cart: [],
            total: 0.0,
            errorMessage: null
         };
      default:
         return state;
   }
};
