export const ShoeActions = {
   FETCH_SHOE_START: 'FETCH_SHOE_START',
   FETCH_SHOES_SUCCESS: 'FETCH_SHOES_SUCCESS',
   FETCH_SHOES_FAILED: 'FETCH_SHOES_FAILED',
   FETCH_SHOE_BY_ID_SUCCESS: 'FETCH_SHOE_BY_ID_SUCCESS',
   FETCH_SHOE_BY_ID_FAILED: 'FETCH_SHOE_BY_ID_FAILED',
   SET_SHOE_FILTER: 'SET_SHOE_FILTER',
   SHOW_QUICKVIEW: 'SHOW_QUICKVIEW',
   CLOSE_QUICKVIEW: 'CLOSE_QUICKVIEW',
   SET_SHOE_SIZE: 'SET_SHOE_SIZE',
   CHANGE_ACTIVE_SHOE_IMAGE: 'CHANGE_ACTIVE_SHOE_IMAGE'
};

export const Filters = {
   SHOW_ALL: 'SHOW_ALL',
   SHOW_FEATURED: 'SHOW_FEATURED',
   SHOW_ADIDAS: 'SHOW_ADIDAS',
   SHOW_JORDAN: 'SHOW_JORDAN',
   SHOW_NIKE: 'SHOW_NIKE'
};

export const CartActions = {
   ADD_TO_CART: 'ADD_TO_CART',
   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
   CLEAR_CART: 'CLEAR_CART',
   LOAD_CART_FROM_LOCAL_STORAGE: 'LOAD_CART_FROM_LOCAL_STORAGE'
};

export const AccountActions = {
   SUBMIT_REGISTER_SUCCESS: 'SUBMIT_REGISTER_SUCCESS',
   SUBMIT_REGISTER_FAILURE: 'SUBMIT_REGISTER_FAILURE',
   SUBMIT_LOGIN_SUCCESS: 'SUBMIT_LOGIN_SUCCESS',
   SUBMIT_LOGIN_FAILURE: 'SUBMIT_LOGIN_FAILURE',
   RESET_ACCOUNT_REDUCER: 'RESET_ACCOUNT_INPUTS',
   VERIFY_TOKEN_SUCCESS: 'VERIFY_TOKEN_SUCCESS',
   VERIFY_TOKEN_FAILURE: 'VERIFY_TOKEN_FAILURE',
   ACCOUNT_LOGOUT: 'ACCOUNT_LOGOUT',
   SUBMIT_NEW_ACCOUNT_USERNAME_SUCCESS: 'SUBMIT_NEW_ACCOUNT_USERNAME_SUCCESS',
   SUBMIT_NEW_ACCOUNT_USERNAME_FAILURE: 'SUBMIT_NEW_ACCOUNT_USERNAME_FAILURE',
   SUBMIT_NEW_ACCOUNT_EMAIL_SUCCESS: 'SUBMIT_NEW_ACCOUNT_EMAIL_SUCCESS',
   SUBMIT_NEW_ACCOUNT_EMAIL_FAILURE: 'SUBMIT_NEW_ACCOUNT_EMAIL_FAILURE',
   SUBMIT_NEW_ACCOUNT_PASSWORD_SUCCESS: 'SUBMIT_NEW_ACCOUNT_PASSWORD_SUCCESS',
   SUBMIT_NEW_ACCOUNT_PASSWORD_FAILURE: 'SUBMIT_NEW_ACCOUNT_PASSWORD_FAILURE',
   VERIFY_USER_JWT_SUCCESS: 'VERIFY_USER_JWT_SUCCESS'
};

export const CheckoutActions = {
   CHECKOUT_INPUT_CHANGE: 'CHECKOUT_INPUT_CHANGE',
   SUBMIT_ORDER_SUCCESS: 'SUBMIT_ORDER_SUCCESS',
   SUBMIT_ORDER_FAILURE: 'SUBMIT_ORDER_FAILURE',
   CLEAR_CHECKOUT_REDUCER: 'CLEAR_CHECKOUT_REDUCER'
};

export const ReviewActions = {
   GET_REVIEWS_BY_SHOEID_SUCCESS: 'GET_REVIEWS_SUCCESS',
   GET_REVIEWS_BY_SHOEID_FAILURE: 'GET_REVIEWS_FAILURE',
   CHANGE_REVIEW_RATING: 'CHANGE_REVIEW_RATING',
   CHANGE_REVIEW_TEXT: 'CHANGE_REVIEW_TEXT',
   POST_NEW_REVIEW_SUCCESS: 'POST_NEW_REVIEW_SUCCESS',
   POST_NEW_REVIEW_FAILURE: 'POST_NEW_REVIEW_FAILURE',
   RESET_REVIEWS: 'RESET_REVIEWS',
   RESET_REVIEW_FORM: 'RESET_REVIEW_FORM'
};

export const NotificationActions = {
   ADD_NOTIFICATION: 'ADD_NOTIFICATION',
   REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
   ERROR_NOTIFICATION: 'ERROR_NOTIFICATION'
};

export const OrderActions = {
   GET_ORDER_HISTORY_SUCCESS: 'GET_ORDER_HISTORY_SUCCESS',
   GET_ORDER_HISTORY_FAILURE: 'GET_ORDER_HISTORY_FAILURE'
};