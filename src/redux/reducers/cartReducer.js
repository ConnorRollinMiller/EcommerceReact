import {
	CartActions,
} from '../actions/actionTypes';

const initialState = {
	cart: [],
	total: 0.00,
	errorMessage: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CartActions.ADD_TO_CART_SUCCESS:
			return {
				...state,
				errorMessage: null,
				total: state.total + action.shoe.Price,
				cart: [
					...state.cart,
					{
						id: action.id,
						shoe: action.shoe
					}
				]
			}
		case CartActions.ADD_TO_CART_FAILURE:
			return {
				...state,
				errorMessage: action.errorMessage
			}
		case CartActions.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.id),
				total: state.total - action.price
			}
		default:
			return state;
	}
} 