import { CheckoutActions } from '../actions/actionTypes';

const initialState = {
	firstName: '',
	lastName: '',
	country: '',
	state: '',
	streetAddress: '',
	zipCode: '',
	phone: '',
	email: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CheckoutActions.INPUT_CHANGE:
			return {
				...state,
				[ action.name ]: action.value
			}
		default:
			return state;
	}
}