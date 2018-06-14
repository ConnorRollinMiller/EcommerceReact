import { ReviewActions } from '../actions';

const initialState = {
	reviewRating: null,
	reviewText: '',
	reviews: [],
	error: false,
	errorMessage: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ReviewActions.GET_REVIEWS_BY_SHOEID_SUCCESS:
			return {
				...state,
				error: false,
				errorMessage: null,
				reviews: action.reviews
			}
		case ReviewActions.GET_REVIEWS_BY_SHOEID_FAILURE:
			return {
				...state,
				error: true,
				errorMessage: action.errorMessage,
			}
		case ReviewActions.CHANGE_REVIEW_RATING:
			return {
				...state,
				reviewRating: action.rating
			}
		case ReviewActions.CHANGE_REVIEW_TEXT:
			return {
				...state,
				reviewText: action.value
			}
		case ReviewActions.POST_NEW_REVIEW_SUCCESS:
			return {
				...state,
				error: false,
				errorMessage: null,
				reviews: [ ...state.reviews, action.newReview ]
			}
		case ReviewActions.POST_NEW_REVIEW_FAILURE:
			return {
				...state,
				error: true,
				errorMessage: action.errorMessage,
			}
		case ReviewActions.RESET_REVIEWS:
			return {
				...state,
				reviews: []
			}
		default:
			return state;
	}
}