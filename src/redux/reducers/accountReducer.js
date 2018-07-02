import { AccountActions } from '../actions';

const initialState = {
   user: null,
   email: '',
   username: '',
   password: '',
   confirmPassword: '',
   error: false,
   errorMessage: null,
   isLoginForm: true
};

export default (state = initialState, action) => {
   switch (action.type) {
      case AccountActions.CHANGE_FORM:
         return {
            ...state,
            isLoginForm: !state.isLoginForm
         };
      case AccountActions.ACCOUNT_INPUT_CHANGE:
         return {
            ...state,
            [action.name]: action.value
         };
      case AccountActions.SUBMIT_REGISTER_SUCCESS:
         return {
            ...state,
            user: action.user,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
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
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            error: false,
            errorMessage: null
         };
      case AccountActions.SUBMIT_LOGIN_FAILURE:
         return {
            ...state,
            error: true,
            errorMessage: action.errorMessage
         };
      case AccountActions.RESET_ACCOUNT_INPUTS:
         return {
            ...state,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            error: false,
            errorMessage: null
         };
      case AccountActions.CHANGE_REVIEW_TEXT:
         return {
            ...state,
            reviewText: action.value
         };
      case AccountActions.VERIFY_TOKEN_SUCCESS:
         return {
            ...state,
            user: action.user,
            error: false,
            errorMessage: null
         };
      case AccountActions.VERIFY_TOKEN_FAILURE:
         return {
            ...state,
            user: null
         };
      case AccountActions.ACCOUNT_LOGOUT:
         return {
            ...state,
            user: null
         };
      default:
         return state;
   }
};
