import axios from 'axios';
import { JwtActions } from './index';
import { TOKEN_NAMES } from '../../constants';
import { getToken } from '../../utilities/localStorage';

const API_JWT_URL = '/api/jwt';

export const verifyToken = () => {
   return (dispatch) => {

      const cart = JSON.parse(getToken(TOKEN_NAMES.CART));

      if (cart) {
         if (cart.length > 0) {

            let total = 0;
            cart.forEach(item => total += item.price);

            dispatch(verifyCart(cart, total));
         }
      }

      const user = getToken(TOKEN_NAMES.USER);

      if (!user) {
         return;
      }

      axios.post(`${ API_JWT_URL }/verify`, { token: user })
         .then(res => {
            // console.log(res);
            if (res.data.success === true) {
               dispatch(verifyTokenSuccessUser(res.data.user));
            }
         })
         .catch(err => {
            // console.log(err);
            console.log(err.response);
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

const verifyCart = (cart, total) => ({
   type: JwtActions.VERIFY_TOKEN_SUCCESS_CART,
   cart,
   total
});