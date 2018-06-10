import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shoeReducer from './shoeReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';

export default combineReducers({
	shoeReducer,
	cartReducer,
	checkoutReducer,
	routerReducer
});
