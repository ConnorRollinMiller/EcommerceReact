import { AccountActions } from './index';
import axios from 'axios';

import { TOKEN_NAMES } from '../../constants';
import { getToken, setToken, deleteToken } from '../../utilities/localStorage';
import RegisterNewUserDTO from '../../modelsDTO/RegisterNewUserDTO';
import LoginUserDTO from '../../modelsDTO/LoginUserDTO';
import NewAccountUsernameDTO from '../../modelsDTO/NewAccountUsernameDTO';
import NewAccountEmailDTO from '../../modelsDTO/NewAccountEmailDTO';
import NewAccountPasswordDTO from '../../modelsDTO/NewAccountPasswordDTO';

const API_USER_URL = '/api/users';
const API_JWT_URL = '/api/jwt';

export const submitAccountRegister = (email, username, password, confirmPassword) => {
   return (dispatch) => {
      if (!email)
         return dispatch(submitAccountLoginFailure('Email Is Required!'));
      if (!username)
         return dispatch(submitAccountLoginFailure('Username Is Required!'));
      if (username.length < 4)
         return dispatch(submitAccountLoginFailure('Username Must Be 4 Or More Characters.'));
      if (!password || !confirmPassword)
         return dispatch(submitAccountLoginFailure('Password / Confirm Password are Required!'));
      if (password.length < 4)
         return dispatch(submitAccountLoginFailure('Password Must Be 4 Or More Characters.'));
      if (password !== confirmPassword)
         return dispatch(submitAccountRegisterFailure(`Passwords Don't Match!`));

      const newUser = RegisterNewUserDTO(email, username, password);

      axios.post(`${ API_USER_URL }/register`, newUser)
         .then(res => {
            console.log(res.data)
            if (res.data.success === true) {
               dispatch(submitAccountRegisterSuccess(res.data.payload));
               setToken(TOKEN_NAMES.USER, res.data.token);
            } else {
               dispatch(submitAccountRegisterFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log('ERROR:', err);
            console.log('ERROR:', err.response);
            dispatch(submitAccountRegisterFailure(err.response));
         });
   };
};

const submitAccountRegisterSuccess = (user) => ({
   type: AccountActions.SUBMIT_REGISTER_SUCCESS,
   user
});

const submitAccountRegisterFailure = (errorMessage) => ({
   type: AccountActions.SUBMIT_REGISTER_FAILURE,
   errorMessage
});

export const submitAccountLogin = (username, password) => {
   return dispatch => {
      if (!username)
         return dispatch(submitAccountLoginFailure('Username Is Required!'));
      if (!password)
         return dispatch(submitAccountLoginFailure('Password Is Required!'));
      if (username.length < 4 || password.length < 4)
         return dispatch(submitAccountLoginFailure('User Name Or Password Is Incorrect.'));

      const user = LoginUserDTO(username, password)

      axios.post(`${ API_USER_URL }/login`, user)
         .then(res => {
            if (res.data.success === true) {
               dispatch(submitAccountLoginSuccess(res.data.payload.user));
               setToken(TOKEN_NAMES.USER, res.data.token);
            } else {
               dispatch(submitAccountLoginFailure(res.data.message));
            }
         })
         .catch(err => {
            console.error(err);
            console.error('ERROR:', err.response);
            dispatch(submitAccountLoginFailure(err.response.data.message))
         });
   };
};

const submitAccountLoginSuccess = (user) => ({
   type: AccountActions.SUBMIT_LOGIN_SUCCESS,
   user
});

const submitAccountLoginFailure = (errorMessage) => ({
   type: AccountActions.SUBMIT_LOGIN_FAILURE,
   errorMessage
});

export const resetAccountReducer = () => ({
   type: AccountActions.RESET_ACCOUNT_REDUCER
});

export const accountLogout = () => {
   return (dispatch) => {
      deleteToken(TOKEN_NAMES.USER);
      dispatch(accountLogoutSuccess());
   }
};

const accountLogoutSuccess = () => ({
   type: AccountActions.ACCOUNT_LOGOUT
});

export const submitNewAccountUsername = (userId, currentUsername, newUsername) => {
   return dispatch => {

      if (!userId)
         return dispatch(submitNewAccountUserNameFailure('No User ID Given.'));
      if (!currentUsername)
         return dispatch(submitNewAccountUserNameFailure('No Username Given.'));
      if (!newUsername)
         return dispatch(submitNewAccountUserNameFailure('No New Username Given.'));
      if (currentUsername.toUpperCase() === newUsername.toUpperCase())
         return dispatch(submitNewAccountUserNameFailure('New Username Can Not Match Current Username.'));

      const newAccountUserName = NewAccountUsernameDTO(newUsername);

      axios.put(`${ API_USER_URL }/username/${ userId }`, newAccountUserName)
         .then(res => {
            console.log(res);
            if (res.data.success === true) {
               dispatch(submitNewAccountUserNameSuccess(res.data.payload.user));
               setToken(TOKEN_NAMES.USER, res.data.token);
            } else {
               dispatch(submitNewAccountUserNameFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log(err);
            console.log(err.response);
            dispatch(submitNewAccountUserNameFailure(err.response.data));
         });
   }
};

const submitNewAccountUserNameSuccess = (user) => ({
   type: AccountActions.SUBMIT_NEW_ACCOUNT_USERNAME_SUCCESS,
   user
});

const submitNewAccountUserNameFailure = (errorMessage) => ({
   type: AccountActions.SUBMIT_NEW_ACCOUNT_USERNAME_FAILURE,
   errorMessage
});

export const submitNewAccountEmail = (userId, currentEmail, newEmail) => {
   return dispatch => {

      if (!userId)
         return dispatch(submitNewAccountEmailFailure('No User ID Given.'));
      if (!currentEmail)
         return dispatch(submitNewAccountEmailFailure('No Email Given.'));
      if (!newEmail)
         return dispatch(submitNewAccountEmailFailure('No New Email Given.'));
      if (currentEmail.toUpperCase() === newEmail.toUpperCase())
         return dispatch(submitNewAccountEmailFailure('New Email Can Not Match Current Email.'));

      const newAccountEmail = NewAccountEmailDTO(newEmail);

      axios.put(`${ API_USER_URL }/email/${ userId }`, newAccountEmail)
         .then(res => {
            if (res.data.success === true) {
               dispatch(submitNewAccountEmailSuccess(res.data.payload.user));
               setToken(TOKEN_NAMES.USER, res.data.token);
            } else {
               dispatch(submitNewAccountEmailFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log(err);
            console.log(err.response);
            dispatch(submitNewAccountEmailFailure(err.response.data.message))
         })
   }
}

const submitNewAccountEmailSuccess = (user) => ({
   type: AccountActions.SUBMIT_NEW_ACCOUNT_EMAIL_SUCCESS,
   user
});

const submitNewAccountEmailFailure = (errorMessage) => ({
   type: AccountActions.SUBMIT_NEW_ACCOUNT_EMAIL_FAILURE,
   errorMessage
});

export const submitNewAccountPassword = (userId, currentPassword, newPassword, confirmNewPassword) => {
   return dispatch => {

      if (!userId)
         return dispatch(submitNewAccountPasswordFailure('No User ID Given.'));
      if (!currentPassword)
         return dispatch(submitNewAccountPasswordFailure('Incorrect Current Password.'));
      if (!newPassword)
         return dispatch(submitNewAccountPasswordFailure('No New Password Given.'));
      if (!confirmNewPassword)
         return dispatch(submitNewAccountPasswordFailure('Did Not Confirm New Password.'));
      if (currentPassword === newPassword || currentPassword === confirmNewPassword)
         return dispatch(submitNewAccountPasswordFailure('Current Password Can Not Be The Same As New Password.'));
      if (newPassword !== confirmNewPassword)
         return dispatch(submitNewAccountPasswordFailure('Passwords Do Not Match.'));
      if (newPassword === currentPassword)
         return dispatch(submitNewAccountPasswordFailure('New Password Can Not Match Current Password.'));

      const newAccountPassword = NewAccountPasswordDTO(currentPassword, newPassword);

      axios.put(`${ API_USER_URL }/password/${ userId }`, newAccountPassword)
         .then(res => {
            if (res.data.success === true) {
               dispatch(submitNewAccountPasswordSuccess(res.data.payload.user));
               setToken(TOKEN_NAMES.USER, res.data.token);
            } else {
               dispatch(submitNewAccountPasswordFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log(err);
            console.log(err.response);
            dispatch(submitNewAccountPasswordFailure(err.response.data.message));
         });
   }
}

const submitNewAccountPasswordSuccess = (user) => ({
   type: AccountActions.SUBMIT_NEW_ACCOUNT_PASSWORD_SUCCESS,
   user
});

const submitNewAccountPasswordFailure = (errorMessage) => ({
   type: AccountActions.SUBMIT_NEW_ACCOUNT_PASSWORD_FAILURE,
   errorMessage
});

export const verifyUserJWT = () => {
   return (dispatch) => {
      const user = getToken(TOKEN_NAMES.USER);

      if (!user) {
         dispatch(verifyUserJWTSuccess(null));
         return;
      }

      axios.post(`${ API_JWT_URL }/verify`, { token: user })
         .then(res => {
            console.log(res);
            if (res.data.success === true) {
               dispatch(verifyUserJWTSuccess(res.data.user));
            }
         })
         .catch(err => {
            console.log(err.response);
            // dispatch(verifyTokenFailure(err.response));
         });
   }
}

const verifyUserJWTSuccess = (user) => ({
   type: AccountActions.VERIFY_USER_JWT_SUCCESS,
   user
});