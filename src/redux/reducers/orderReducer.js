import { OrderActions } from '../actions';

const initialState = {
   orderHistory: [],
   error: false,
   errorMessage: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case OrderActions.GET_ORDER_HISTORY_SUCCESS:
         return {
            ...state,
            orderHistory: action.orderHistory,
            error: false,
            errorMessage: null
         }
      case OrderActions.GET_ORDER_HISTORY_FAILURE:
         return {
            ...state,
            error: true,
            errorMessage: action.errorMessage
         }
      default:
         return state;
   }
}