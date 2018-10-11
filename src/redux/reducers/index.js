import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shoeReducer from './shoeReducer';
import cartReducer from './cartReducer';
import accountReducer from './accountReducer';
import checkoutReducer from './checkoutReducer';
import reviewReducer from './reviewReducer';
import notificationReducer from './notificationReducer';
import orderReducer from './orderReducer';

export default combineReducers({
   shoeReducer,
   cartReducer,
   accountReducer,
   checkoutReducer,
   reviewReducer,
   notificationReducer,
   orderReducer,
   routerReducer
});
