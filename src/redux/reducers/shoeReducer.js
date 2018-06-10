import {
	ShoeActions,
	Filters
} from '../actions/actionTypes.js';

const initialState = {
	shoes: null,
	shoe: null,
	filter: Filters.SHOW_ALL,
	fetchingShoes: false,
	error: false,
	errorMessage: null,
	quickviewShoe: null,
	quickviewOpen: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ShoeActions.FETCH_SHOES_SUCCESS:
			return {
				...state,
				shoes: action.shoes,
				error: false,
				errorMessage: null
			}
		case ShoeActions.FETCH_SHOES_FAILED:
			return {
				...state,
				error: true,
				errorMessage: action.err
			}
		case ShoeActions.SET_SHOE_FILTER:
			return {
				...state,
				filter: action.filter
			}
		case ShoeActions.FETCH_SHOE_BY_ID_SUCCESS:
			return {
				...state,
				shoe: action.shoe,
				error: false,
				errorMessage: null
			}
		case ShoeActions.FETCH_SHOE_BY_ID_FAILED:
			return {
				...state,
				error: true,
				errorMessage: action.err
			}
		case ShoeActions.SHOW_QUICKVIEW:
			return {
				...state,
				quickviewShoe: action.shoe,
				quickviewOpen: true
			}
		case ShoeActions.CLOSE_QUICKVIEW:
			return {
				...state,
				quickviewShoe: null,
				quickviewOpen: false
			}
		case ShoeActions.SET_SHOE_SIZE:
			return {
				...state,
				quickviewShoe: {
					...state.quickviewShoe,
					size: action.size
				}
			}
		default:
			return state;
	}
}