import { AccountActions } from '../actions/index';
import { APP_URL } from '../../utilities/constants';
import axios from 'axios';
import { setToken } from '../../utilities/localStorage';
import createNewUser from '../../utilities/createNewUser';

const API_USER_URL = '/api/users';
const API_JWT_URL = '/api/jwt';

export const changeForm = () => ({
   type: AccountActions.CHANGE_FORM
});

export const accountInputChange = (name, value) => ({
   type: AccountActions.ACCOUNT_INPUT_CHANGE,
   name,
   value
});

export const submitAccountRegister = (
   email,
   username,
   password,
   confirmPassword
) => {
   return dispatch => {
      if (!email) {
         return dispatch(submitAccountLoginFailure('Email Is Required!'));
      }
      if (!username) {
         return dispatch(submitAccountLoginFailure('Username Is Required!'));
      }
      if (username.length < 4) {
         return dispatch(
            submitAccountLoginFailure('Username Must Be 4 Or More Characters.')
         );
      }
      if (!password || !confirmPassword) {
         return dispatch(
            submitAccountLoginFailure(
               'Password / Confirm Password are Required!'
            )
         );
      }
      if (password.length < 4) {
         return dispatch(
            submitAccountLoginFailure('Password Must Be 4 Or More Characters.')
         );
      }
      if (password !== confirmPassword) {
         return dispatch(
            submitAccountRegisterFailure(`Passwords Don't Match!`)
         );
      }

      const newUser = createNewUser(email, username, password);

      console.log('NEW USER:', newUser);

      axios
         .post(`${APP_URL}${API_USER_URL}/register`, newUser)
         .then(res => {
            console.log('RESPONSE:', res);
            console.log('RESPONSE STATUS:', res.status);
            if (res.data.success === true) {
               dispatch(submitAccountRegisterSuccess(res.data.user));
               setToken(res.data.token);
            } else {
               dispatch(submitAccountRegisterFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log('ERROR:', err.response);
            dispatch(submitAccountRegisterFailure(err.response));
         });
   };
};

const submitAccountRegisterSuccess = user => ({
   type: AccountActions.SUBMIT_REGISTER_SUCCESS,
   user
});

const submitAccountRegisterFailure = errorMessage => ({
   type: AccountActions.SUBMIT_REGISTER_FAILURE,
   errorMessage
});

export const submitAccountLogin = (username, password) => {
   return dispatch => {
      if (!username) {
         return dispatch(submitAccountLoginFailure('Username Is Required!'));
      }
      if (!password) {
         return dispatch(submitAccountLoginFailure('Password Is Required!'));
      }
      if (username.length < 4 || password.length < 4) {
         return dispatch(
            submitAccountLoginFailure('User Name Or Password Is Incorrect.')
         );
      }

      const user = {
         UserName: username,
         Password: password
      };

      axios
         .post(`${APP_URL}${API_USER_URL}/login`, user)
         .then(res => {
            console.log('RESPONSE:', res);
            console.log('STATUS:', res.status);
            dispatch(submitAccountLoginSuccess(res.data.user));
            setToken(res.data.token);
         })
         .catch(err => {
            console.log('ERROR:', err);
            console.log(err.response);
            dispatch(submitAccountLoginFailure(err.response));
         });
   };
};

const submitAccountLoginSuccess = user => ({
   type: AccountActions.SUBMIT_LOGIN_SUCCESS,
   user
});

const submitAccountLoginFailure = errorMessage => ({
   type: AccountActions.SUBMIT_LOGIN_FAILURE,
   errorMessage
});

export const resetAccountInputs = () => ({
   type: AccountActions.RESET_ACCOUNT_INPUTS
});

export const verifyToken = token => {
   return dispatch => {
      if (!token)
         return dispatch(verifyTokenFailure('No Token In Local Storage.'));

      axios
         .post(`${APP_URL}${API_JWT_URL}/verify`, { token: token })
         .then(res => {
            console.log(res.data);
            dispatch(verifyTokenSuccess(res.data.user));
         })
         .catch(err => {
            console.log(err);
            console.log(err.response);
            dispatch(verifyTokenFailure(err.response));
         });
   };
};

const verifyTokenSuccess = user => ({
   type: AccountActions.VERIFY_TOKEN_SUCCESS,
   user
});

const verifyTokenFailure = errorMessage => ({
   type: AccountActions.VERIFY_TOKEN_FAILURE,
   errorMessage
});

export const accountLogout = () => ({
   type: AccountActions.ACCOUNT_LOGOUT
});
