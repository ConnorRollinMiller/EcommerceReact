import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shoeReducer from './shoeReducer';
import cartReducer from './cartReducer';
import accountReducer from './accountReducer';
import checkoutReducer from './checkoutReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
	shoeReducer,
	cartReducer,
	accountReducer,
	checkoutReducer,
	reviewReducer,
	routerReducer
});
