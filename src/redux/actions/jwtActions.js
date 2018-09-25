import axios from 'axios';
import { JwtActions } from './index';
import { getToken } from '../../utilities/localStorage';

const API_JWT_URL = '/api/jwt';

export const verifyToken = () => {
   return dispatch => {

      const cart = JSON.parse(localStorage.getItem('CART'));

      if (!cart) {
         return;
      }

      if (cart !== 'undefined' && cart.length > 0) {
         let total = 0;
         // console.log(cart)

         cart.forEach(item => total += item.price);
         dispatch(verifyTokenSuccessCart(cart, total));

      }

      const token = getToken();

      if (!token) {
         return;
      }

      axios.post(`${ API_JWT_URL }/verify`, { token: token })
         .then(res => {
            console.log(res);
            if (res.data.payload.user) {
               dispatch(verifyTokenSuccessUser(res.data.payload.user));
            }
         })
         .catch(err => {
            console.log(err);
            // console.log(err.response);
            // dispatch(verifyTokenFailure(err.response));
         });
   };
}

const verifyTokenSuccessUser = (user) => ({
   type: JwtActions.VERIFY_TOKEN_SUCCESS_USER,
   user
});

// const verifyTokenFailure = () => ({
//    type: JwtActions.VERIFY_TOKEN_FAILURE_USER
// });

const verifyTokenSuccessCart = (cart, total) => ({
   type: JwtActions.VERIFY_TOKEN_SUCCESS_CART,
   cart,
   total
});