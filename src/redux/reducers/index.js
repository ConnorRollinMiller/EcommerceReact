import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shoeReducer from './shoeReducer';
import cartReducer from './cartReducer';

export default combineReducers({
	shoeReducer,
	cartReducer,
	routerReducer
});
