import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '../icon/StarIcon';
import './css/ReviewRating.css';

const ReviewRating = ({ ...props }) => (
	<div className='d-flex'>

		<div
			className={ props.reviewRating === 1 ? 'd-flex review-rating-active review-rating' : 'd-flex review-rating' }
			onClick={ () => props.changeReviewRating(1) }
		>
			<StarIcon />
		</div>
		|
		<div
			className={ props.reviewRating === 2 ? 'd-flex review-rating-active review-rating' : 'd-flex review-rating' }
			onClick={ () => props.changeReviewRating(2) }
		>
			<StarIcon />
			<StarIcon />
		</div>
		|
		<div
			className={ props.reviewRating === 3 ? 'd-flex review-rating-active review-rating' : 'd-flex review-rating' }
			onClick={ () => props.changeReviewRating(3) }
		>
			<StarIcon />
			<StarIcon />
			<StarIcon />
		</div>
		|
		<div
			className={ props.reviewRating === 4 ? 'd-flex review-rating-active review-rating' : 'd-flex review-rating' }
			onClick={ () => props.changeReviewRating(4) }
		>
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
		</div>
		|
		<div
			className={ props.reviewRating === 5 ? 'd-flex review-rating-active review-rating' : 'd-flex review-rating' }
			onClick={ () => props.changeReviewRating(5) }
		>
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
		</div>
	</div>
);

ReviewRating.propTypes = {
	reviewRating: PropTypes.number,
	changeReviewRating: PropTypes.func.isRequired
}

export default ReviewRating;