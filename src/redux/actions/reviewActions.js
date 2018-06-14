import { ReviewActions } from '../actions';
import { APP_URL } from '../../AppConstants';
import axios from 'axios';

const ROUTE = 'api/reviews'

export const fetchReviewsByShoeId = (shoeId) => {
	return dispatch => {
		axios.get(`${ APP_URL }/${ ROUTE }/${ shoeId }`)
			.then(res => {
				console.log('RESPONSE:', res.data);
				dispatch(fetchReviewsByShoeIdSuccess(res.data.reviews));
			})
			.catch(err => {
				console.log('ERROR:', err.response);
				console.log('STAUS:', err.response.status);
				if (err.response.status === 404) {
					dispatch(resetReviews());
				} else {
					dispatch(fetchReviewsByShoeIdFailure(err.response));
				}

			});
	}
}

const fetchReviewsByShoeIdSuccess = (reviews) => ({
	type: ReviewActions.GET_REVIEWS_BY_SHOEID_SUCCESS,
	reviews
});

const fetchReviewsByShoeIdFailure = (errorMessage) => ({
	type: ReviewActions.GET_REVIEWS_BY_SHOEID_FAILURE,
	errorMessage
});

export const resetReviews = () => ({
	type: ReviewActions.RESET_REVIEWS
});

export const changeReviewRating = (rating) => ({
	type: ReviewActions.CHANGE_REVIEW_RATING,
	rating
});

export const changeReviewText = (value) => ({
	type: ReviewActions.CHANGE_REVIEW_TEXT,
	value
});

export const postNewReview = (shoeId, userId, rating, reviewText) => {

	const date = new Date();

	let newReview = {
		ShoeId: shoeId,
		UserId: userId,
		ReviewDate: `${ date.getFullYear() }-${ date.getMonth() }-${ date.getDate() }`,
		ReviewText: reviewText,
		Rating: rating
	}

	return dispatch => {
		axios.post(`${ APP_URL }/${ ROUTE }`, newReview)
			.then(res => {
				console.log(res.data);
				dispatch(postNewReviewSuccess(res.data.newReview));
			})
			.catch(err => {
				console.log('ERROR:', err.response);
				dispatch(postNewReviewFailure(err.response));
			});
	}
}

const postNewReviewSuccess = (newReview) => ({
	type: ReviewActions.POST_NEW_REVIEW_SUCCESS,
	newReview
});

const postNewReviewFailure = (errorMessage) => ({
	type: ReviewActions.POST_NEW_REVIEW_FAILURE,
	errorMessage
})