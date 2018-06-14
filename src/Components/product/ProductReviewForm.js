import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import TextArea from '../form/TextArea';
import ReviewRating from '../review/ReviewRating';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import { changeReviewText, changeReviewRating, postNewReview } from '../../redux/actions/reviewActions';

class ProductReviewForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.reviewText !== this.props.reviewText) {
			return true;
		} else if (nextProps.reviewRating !== this.props.reviewRating) {
			return true;
		} else if (nextProps.shoeId !== this.props.shoeId) {
			return true;
		} else if (nextProps.userId !== this.props.userId) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<Form
				className='w-100 my-2 py-4'
				onSubmit={ e =>
					this.props.postNewReview(
						e,
						this.props.shoeId,
						this.props.userId,
						this.props.reviewRating,
						this.props.reviewText
					)
				}
			>
				<div className='mb-1'>
					<p className='mb-0'>Your Rating</p>
					<ReviewRating reviewRating={ this.props.reviewRating } changeReviewRating={ this.props.changeReviewRating } />
				</div>
				<TextArea
					label='Your Review'
					value={ this.props.reviewText }
					onChange={ this.props.changeReviewText }
				/>
				<PrimaryButton>
					Submit Review
				</PrimaryButton>
			</Form>
		);
	}
}

ProductReviewForm.propTypes = {
	reviewRating: PropTypes.number,
	reviewText: PropTypes.string.isRequired,
	changeReviewText: PropTypes.func.isRequired,
	changeReviewRating: PropTypes.func.isRequired,
	shoeId: PropTypes.number.isRequired,
	userId: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	reviewText: state.reviewReducer.reviewText,
	reviewRating: state.reviewReducer.reviewRating,
	shoeId: ownProps.shoeId,
	userId: ownProps.userId
});

const mapDispatchToProps = (dispatch) => ({
	changeReviewText: value => dispatch(changeReviewText(value)),
	changeReviewRating: rating => dispatch(changeReviewRating(rating)),
	postNewReview: (e, shoeId, userId, reviewRating, reviewText) => {
		e.preventDefault();
		dispatch(postNewReview(shoeId, userId, reviewRating, reviewText));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviewForm);