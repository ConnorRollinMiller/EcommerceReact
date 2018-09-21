import { AccountActions } from '../actions/index';
import axios from 'axios';
import { setToken, deleteToken } from '../../utilities/localStorage';
import RegisterNewUserDTO from '../../utilities/RegisterNewUserDTO';
import LoginUserDTO from '../../utilities/LoginUserDTO';
import NewAccountUsernameDTO from '../../utilities/NewAccountUsernameDTO';
import NewAccountEmailDTO from '../../utilities/NewAccountEmailDTO';
import NewAccountPasswordDTO from '../../utilities/NewAccountPasswordDTO';

const API_USER_URL = '/api/users';
const API_JWT_URL = '/api/jwt';

export const accountInputChange = (name, value) => ({
   type: AccountActions.ACCOUNT_INPUT_CHANGE,
   name,
   value
});

export const submitAccountRegister = (email, username, password, confirmPassword) => {
   return dispatch => {
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

      console.log('NEW USER:', newUser);

      axios.post(`${ API_USER_URL }/register`, newUser)
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
            console.log(res.data);
            if (res.data.success === true) {
               dispatch(submitAccountLoginSuccess(res.data.user));
               setToken(res.data.token);
            } else {
               dispatch(submitAccountLoginFailure(res.data.message));
            }
         })
         .catch(err => {
            // console.log('ERROR:', err);
            console.log(err.response.data);
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

export const verifyToken = token => {
   return dispatch => {
      if (!token)
         return dispatch(verifyTokenFailure('No Token In Local Storage.'));

      axios
         .post(`${ API_JWT_URL }/verify`, { token: token })
         .then(res => {
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

export const accountLogout = () => {
   deleteToken();
   return {
      type: AccountActions.ACCOUNT_LOGOUT
   };
};

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
            console.log(res.data);
            if (res.data.success === true) {
               dispatch(submitNewAccountUserNameSuccess(res.data.user));
               setToken(res.data.token);
            } else {
               dispatch(submitNewAccountUserNameFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log(err);
            console.log(err.response);
            dispatch(submitNewAccountUserNameFailure(err.response));
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
            console.log(res.data);
            if (res.data.success === true) {
               dispatch(submitNewAccountEmailSuccess(res.data.user));
            } else {
               dispatch(submitNewAccountEmailFailure(res.data.message));
            }
         })
         .catch(err => {
            console.log(err);
            console.log(err.response);
            dispatch(submitNewAccountEmailFailure(err.response))
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
            // console.log(res.data);
            if (res.data.success === true) {
               dispatch(submitNewAccountPasswordSuccess(res.data.user));
               setToken(res.data.token);
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
