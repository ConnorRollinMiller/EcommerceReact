import { OrderActions } from '../actions';
import axios from 'axios';

const API_ORDER_URL = '/api/orders/';

export const getOrderHistory = (userId) => {
   return (dispatch) => {
      axios.get(`${ API_ORDER_URL }${ userId }`)
         .then(res => {
            console.log(res);
            dispatch(getOrderHistorySuccess(res.data.orderHistory));
         })
         .catch(err => {
            // console.log(err);
            console.log(err.response);
            dispatch(getOrderHistoryFailure(err));
         });
   }
}

const getOrderHistorySuccess = (orderHistory) => ({
   type: OrderActions.GET_ORDER_HISTORY_SUCCESS,
   orderHistory
});

const getOrderHistoryFailure = (errorMsg) => ({
   type: OrderActions.GET_ORDER_HISTORY_FAILURE,
   errorMsg
});