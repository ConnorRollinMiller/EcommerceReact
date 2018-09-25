import { CheckoutActions } from '../actions';

const initialState = {
   zipCode: '',
   phone: '',
   completedOrder: false,
   orderDetails: null,
   itemsOrdered: null,
   error: false,
   errorMessage: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case CheckoutActions.CHECKOUT_INPUT_CHANGE:
         return {
            ...state,
            [ action.name ]: action.value
         };
      case CheckoutActions.SUBMIT_ORDER_SUCCESS:
         return {
            ...state,
            zipCode: '',
            phone: '',
            error: false,
            errorMessage: null,
            completedOrder: true,
            orderDetails: action.order,
            itemsOrdered: action.itemsOrdered
         };
      case CheckoutActions.SUBMIT_ORDER_FAILURE:
         return {
            ...state,
            error: true,
            errorMessage: action.errorMessage
         };
      case CheckoutActions.CLEAR_CHECKOUT_REDUCER:
         return {
            ...state,
            zipCode: '',
            phone: '',
            error: false,
            errorMessage: null,
            completedOrder: false,
            orderDetails: null,
            itemsOrdered: null
         };
      default:
         return state;
   }
};
