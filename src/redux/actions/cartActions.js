import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
} from './actionTypes';

let cartItemId = 0;

export const addToCart = (shoe) => ({
	type: ADD_TO_CART,
	id: cartItemId++,
	shoe
});

export const removeItemFromCart = (id, price) => ({
	type: REMOVE_FROM_CART,
	id,
	price
});