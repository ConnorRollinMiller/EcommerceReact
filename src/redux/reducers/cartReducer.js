import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
} from '../actions/actionTypes';

const initialState = {
	cart: [],
	total: 0.00
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [
					...state.cart,
					{
						id: action.id,
						shoe: action.shoe
					}
				],
				total: state.total + action.shoe.price
			}
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.id),
				total: state.total - action.price
			}
		default:
			return state;
	}
} 