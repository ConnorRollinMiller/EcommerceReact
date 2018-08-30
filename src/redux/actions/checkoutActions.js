import { CheckoutActions } from '../actions/index';
import axios from 'axios';
import NewOrderDTO from '../../utilities/NewOrderDTO';
import NewOrderDetailsDTO from '../../utilities/NewOrderDetailsDTO';

const API_ORDER_URL = '/api/orders/';

export const inputChange = (name, value) => ({
   type: CheckoutActions.CHECKOUT_INPUT_CHANGE,
   name,
   value
});

export const submitOrder = (
   firstName,
   lastName,
   country,
   state,
   city,
   address,
   zipCode,
   phone,
   email,
   total,
   cartItems,
   user
) => {
   return dispatch => {
      let newOrder;

      if (!user) {
         newOrder = NewOrderDTO(
            firstName,
            lastName,
            country,
            state,
            address,
            city,
            zipCode,
            phone,
            email,
            total,
         );
      } else {
         newOrder = NewOrderDTO(
            firstName,
            lastName,
            country,
            state,
            address,
            city,
            zipCode,
            phone,
            email,
            total,
            user.UserId
         );
      }

      const newOrderDetails = cartItems.map(item =>
         NewOrderDetailsDTO(item.shoe.shoeId, 1, item.shoe.price)
      );

      axios
         .post(`${ API_ORDER_URL }`, {
            newOrder: newOrder,
            newOrderDetails: newOrderDetails
         })
         .then(res => {
            ('RESPONSE:', res);
            if (res.data.success) {
               dispatch(submitOrderSuccess(cartItems, res.data.order));
            } else {
               dispatch(submitOrderFailure(res.data.message));
            }
         })
         .catch(err => {
            (err.response);
            dispatch(submitOrderFailure(err.response));
         });
   };
};

const submitOrderSuccess = (itemsOrdered, orderDetails) => ({
   type: CheckoutActions.SUBMIT_ORDER_SUCCESS,
   itemsOrdered,
   orderDetails
});

const submitOrderFailure = errorMessage => ({
   type: CheckoutActions.SUBMIT_ORDER_FAILURE,
   errorMessage
});

export const clearCheckoutReducer = () => ({
   type: CheckoutActions.CLEAR_CHECKOUT_REDUCER
});
