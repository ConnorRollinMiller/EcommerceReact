import { CheckoutActions } from '../actions';

const initialState = {
   // firstName: '',
   // lastName: '',
   // country: '',
   // state: '',
   // address: '',
   // city: '',
   // zipCode: '',
   // phone: '',
   // email: '',
   firstName: 'Connor',
   lastName: 'Miller',
   country: 'USA',
   state: 'Minnesota',
   address: '14616 White Oak Drive',
   city: 'Burnsville',
   zipCode: '55337',
   phone: '(952) 221-7756',
   email: 'miller.connor95@gmail.com',
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
            [action.name]: action.value
         };
      case CheckoutActions.SUBMIT_ORDER_SUCCESS:
         return {
            ...state,
            firstName: '',
            lastName: '',
            country: '',
            state: '',
            address: '',
            city: '',
            zipCode: '',
            phone: '',
            email: '',
            error: false,
            errorMessage: null,
            completedOrder: true,
            orderDetails: action.orderDetails,
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
            firstName: '',
            lastName: '',
            country: '',
            state: '',
            address: '',
            city: '',
            zipCode: '',
            phone: '',
            email: '',
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
