import {
	FETCH_SHOES_SUCCESS,
	FETCH_SHOES_FAILED,
	FETCH_SHOE_BY_ID_SUCCESS,
	FETCH_SHOE_BY_ID_FAILED,
	SET_SHOE_FILTER,
	EMPTY_SHOE_STATE,
	SHOW_QUICKVIEW,
	CLOSE_QUICKVIEW,
	Filters,
} from '../actions/actionTypes.js';

const initialState = {
	shoes: null,
	shoe: null,
	filter: Filters.SHOW_ALL,
	fetchingShoes: false,
	error: false,
	errorMessage: null,
	quickviewShoe: null,
	quickviewOpen: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SHOES_SUCCESS:
			return {
				...state,
				shoes: action.shoes,
				error: false,
				errorMessage: null
			}
		case FETCH_SHOES_FAILED:
			return {
				...state,
				error: true,
				errorMessage: action.err
			}
		case SET_SHOE_FILTER:
			return {
				...state,
				filter: action.filter
			}
		case FETCH_SHOE_BY_ID_SUCCESS:
			return {
				...state,
				shoe: action.shoe,
				error: false,
				errorMessage: null
			}
		case FETCH_SHOE_BY_ID_FAILED:
			return {
				...state,
				error: true,
				errorMessage: action.err
			}
		case EMPTY_SHOE_STATE:
			return {
				...state,
				shoe: null
			}
		case SHOW_QUICKVIEW:
			return {
				...state,
				quickviewShoe: action.shoe,
				quickviewOpen: true
			}
		case CLOSE_QUICKVIEW:
			return {
				...state,
				quickviewShoe: null,
				quickviewOpen: false
			}
		default:
			return state;
	}
}