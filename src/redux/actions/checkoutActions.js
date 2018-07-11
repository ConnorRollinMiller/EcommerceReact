import { CheckoutActions } from '../actions/index';
import { APP_URL } from '../../utilities/constants';
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
                  NewOrderDetailsDTO(item.shoe.ShoeId, 1, item.shoe.Price)
            );

            axios
                  .post(`${ APP_URL }${ API_ORDER_URL }`, {
                        newOrder: newOrder,
                        newOrderDetails: newOrderDetails
                  })
                  .then(res => {
                        console.log('RESPONSE:', res);
                        if (res.data.success) {
                              dispatch(submitOrderSuccess(cartItems, res.data.newOrder));
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
