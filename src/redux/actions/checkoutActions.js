import { CheckoutActions } from '../actions/index';
import axios from 'axios';
import NewOrderDTO from '../../modelsDTO/NewOrderDTO';
import NewOrderDetailsDTO from '../../modelsDTO/NewOrderDetailsDTO';

const API_ORDER_URL = '/api/orders/';

export const inputChange = (name, value) => ({
   type: CheckoutActions.CHECKOUT_INPUT_CHANGE,
   name,
   value
});

export const submitOrder = (firstName, lastName, country, state, city, address, zipCode, phone, email, total, cartItems, userId) => {
   return dispatch => {

      const newOrder = NewOrderDTO(firstName, lastName, country, state, address, city, zipCode, phone, email, total, userId);

      const newOrderDetails = cartItems.map(item => NewOrderDetailsDTO(item.shoeId, 1, item.price));

      axios.post(`${ API_ORDER_URL }`, { newOrder: newOrder, newOrderDetails: newOrderDetails, itemsOrdered: cartItems })
         .then(res => {
            console.log(res);
            if (res.data.success) {
               dispatch(submitOrderSuccess(cartItems, res.data.order));
            } else {
               dispatch(submitOrderFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log(err.response);
            dispatch(submitOrderFailure(err.response));
         });
   };
};

const submitOrderSuccess = (itemsOrdered, order) => ({
   type: CheckoutActions.SUBMIT_ORDER_SUCCESS,
   itemsOrdered,
   order
});

const submitOrderFailure = errorMessage => ({
   type: CheckoutActions.SUBMIT_ORDER_FAILURE,
   errorMessage
});

export const clearCheckoutReducer = () => ({
   type: CheckoutActions.CLEAR_CHECKOUT_REDUCER
});
