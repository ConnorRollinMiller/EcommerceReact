import { CheckoutActions } from '../actions/index';

export const inputChange = (name, value) => ({
	type: CheckoutActions.CHECKOUT_INPUT_CHANGE,
	name,
	value
});