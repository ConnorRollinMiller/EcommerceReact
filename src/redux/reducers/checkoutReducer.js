import { CheckoutActions } from '../actions';

const initialState = {
	firstName: '',
	lastName: '',
	country: '',
	state: '',
	streetAddress: '',
	city: '',
	zipCode: '',
	phone: '',
	email: '',
	checkoutSuccess: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CheckoutActions.CHECKOUT_INPUT_CHANGE:
			return {
				...state,
				[ action.name ]: action.value
			}
		default:
			return state;
	}
}