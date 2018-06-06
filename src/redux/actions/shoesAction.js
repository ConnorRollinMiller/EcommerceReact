import axios from 'axios';
import {
	FETCH_SHOES_SUCCESS,
	FETCH_SHOES_FAILED,
	SET_SHOE_FILTER,
	FETCH_SHOE_BY_ID_SUCCESS,
	FETCH_SHOE_BY_ID_FAILED,
	EMPTY_SHOE_STATE,
	SHOW_QUICKVIEW,
	CLOSE_QUICKVIEW
} from './actionTypes';

import { Filters } from './actionTypes';

const apiUrl = 'http://localhost:8080/api/shoes';

const fetchShoesSuccess = (shoes) => ({
	type: FETCH_SHOES_SUCCESS,
	shoes
});

const fetchShoesFailed = (err) => ({
	type: FETCH_SHOES_FAILED,
	err
})

export const fetchShoes = () => {
	return dispatch => {
		axios.get(apiUrl)
			.then(res => {
				dispatch(fetchShoesSuccess(res.data));
				dispatch(setShoeFilter(Filters.SHOW_FEATURED))
			})
			.catch(err => {
				console.log(err.response);
				dispatch(fetchShoesFailed(err.response));
			});
	}
}

const fetchShoeByIdSuccess = (shoe) => ({
	type: FETCH_SHOE_BY_ID_SUCCESS,
	shoe
});

const fetchShoeByIdFailed = (err) => ({
	type: FETCH_SHOE_BY_ID_FAILED,
	err
});

export const fetchShoeById = (id) => {
	return dispatch => {
		axios.get(`${ apiUrl }/${ id }`)
			.then(res => {
				dispatch(fetchShoeByIdSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchShoeByIdFailed(err.response.data));
			});
	}
}

export const emptyShoeState = () => ({
	type: EMPTY_SHOE_STATE
});

export const setShoeFilter = (filter) => ({
	type: SET_SHOE_FILTER,
	filter
});

export const showQuickview = (shoe) => ({
	type: SHOW_QUICKVIEW,
	shoe
});

export const closeQuickview = () => ({
	type: CLOSE_QUICKVIEW
});