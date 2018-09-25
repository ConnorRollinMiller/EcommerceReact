import { AccountActions, JwtActions } from '../actions';

const initialState = {
   user: null,
   error: false,
   errorMessage: null,
   isUsernameChangeComplete: false,
   accountUserNameError: false,
   accountUserNameErrorMessage: null,
   isEmailChangeComplete: false,
   accountEmailError: false,
   accountEmailErrorMessage: null,
   isPasswordChangeComplete: false,
   accountPasswordError: false,
   accountPasswordErrorMessage: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case JwtActions.VERIFY_TOKEN_SUCCESS_USER:
         return {
            ...state,
            user: action.user,
            error: false,
            errorMessage: null
         };
      case JwtActions.VERIFY_TOKEN_FAILURE_USER:
         return {
            ...state,
            user: null
         };
      case AccountActions.SUBMIT_REGISTER_SUCCESS:
         return {
            ...state,
            user: action.user,
            error: false,
            errorMessage: null
         };
      case AccountActions.SUBMIT_REGISTER_FAILURE:
         return {
            ...state,
            error: true,
            errorMessage: action.errorMessage
         };
      case AccountActions.SUBMIT_LOGIN_SUCCESS:
         return {
            ...state,
            user: action.user,
            error: false,
            errorMessage: null
         };
      case AccountActions.SUBMIT_LOGIN_FAILURE:
         return {
            ...state,
            error: true,
            errorMessage: action.errorMessage
         };
      case AccountActions.RESET_ACCOUNT_REDUCER:
         return {
            ...state,
            error: false,
            errorMessage: null,
            isUsernameChangeComplete: false,
            accountUserNameError: false,
            accountUserNameErrorMessage: null,
            isEmailChangeComplete: false,
            accountEmailError: false,
            accountEmailErrorMessage: null,
            isPasswordChangeComplete: false,
            accountPasswordError: false,
            accountPasswordErrorMessage: null
         };
      case AccountActions.ACCOUNT_LOGOUT:
         return {
            ...state,
            user: null
         };
      case AccountActions.SUBMIT_NEW_ACCOUNT_USERNAME_SUCCESS:
         return {
            ...state,
            user: action.user,
            isUsernameChangeComplete: true,
            accountUserNameError: false,
            accountUserNameErrorMessage: null
         }
      case AccountActions.SUBMIT_NEW_ACCOUNT_USERNAME_FAILURE:
         return {
            ...state,
            isUsernameChangeComplete: false,
            accountUserNameError: true,
            accountUserNameErrorMessage: action.errorMessage
         }
      case AccountActions.SUBMIT_NEW_ACCOUNT_EMAIL_SUCCESS:
         return {
            ...state,
            user: action.user,
            isEmailChangeComplete: true,
            accountEmailError: false,
            accountEmailErrorMessage: null
         }
      case AccountActions.SUBMIT_NEW_ACCOUNT_EMAIL_FAILURE:
         return {
            ...state,
            isEmailChangeComplete: false,
            accountEmailError: true,
            accountEmailErrorMessage: action.errorMessage
         }
      case AccountActions.SUBMIT_NEW_ACCOUNT_PASSWORD_SUCCESS:
         return {
            ...state,
            user: action.user,
            isPasswordChangeComplete: true,
            accountPasswordError: false,
            accountPasswordErrorMessage: null
         }
      case AccountActions.SUBMIT_NEW_ACCOUNT_PASSWORD_FAILURE:
         return {
            ...state,
            isPasswordChangeComplete: false,
            accountPasswordError: true,
            accountPasswordErrorMessage: action.errorMessage
         }
      default:
         return state;
   }
};
