import axios from 'axios';
import {
	FETCH_SHOES_SUCCESS,
	FETCH_SHOES_FAILED,
	SET_SHOE_FILTER,
	FETCH_SHOE_BY_ID_SUCCESS,
	FETCH_SHOE_BY_ID_FAILED,
	EMPTY_SHOE_STATE
} from './actionTypes';

import { Filters } from './actionTypes';

const apiUrl = 'http://localhost:8080/api/shoes';

const fetchShoesSuccess = (shoes) => {
	return {
		type: FETCH_SHOES_SUCCESS,
		shoes
	}
}

const fetchShoesFailed = (err) => {
	return {
		type: FETCH_SHOES_FAILED,
		err
	}
}

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

const fetchShoeByIdSuccess = (shoe) => {
	return {
		type: FETCH_SHOE_BY_ID_SUCCESS,
		shoe
	}
}

const fetchShoeByIdFailed = (err) => {
	return {
		type: FETCH_SHOE_BY_ID_FAILED,
		err
	}
}

export const getShoeById = (id) => {
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

export const emptyShoeState = () => {
	return {
		type: EMPTY_SHOE_STATE
	}
}

export const setShoeFilter = (filter) => {
	return {
		type: SET_SHOE_FILTER,
		filter
	}
}