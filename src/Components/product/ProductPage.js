import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../common/PageTitle';
import Review from '../review/Review';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductReviewForm from './ProductReviewForm';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { fetchShoeById, changeActiveShoeImage } from '../../redux/actions/shoesAction';
import { fetchReviewsByShoeId, resetReviews } from '../../redux/actions/reviewActions';

class ProductPage extends Component {

	componentDidMount() {
		this.props.fetchShoeById(this.props.shoeId);
		this.props.getReviewsByShoeId(this.props.shoeId);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		} else if (nextProps.shoeId !== this.props.shoeId) {
			return true;
		} else if (nextProps.reviews !== this.props.reviews) {
			return true;
		} else if (nextProps.activeShoeImage !== this.props.activeShoeImage) {
			return true;
		}
		return false;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.shoeId !== this.props.shoeId) {
			this.props.fetchShoeById(this.props.shoeId);
			this.props.getReviewsByShoeId(this.props.shoeId);
			this.props.resetReviews();
		}
	}

	render() {
		return (
			<main className='main-section'>
				<PageTitle displayPageTitle={ false } />
				<div className='container-fluid'>
					{
						this.props.shoe &&
						<section className='container py-4 d-flex justify-content-center align-items-stretch'>
							<ProductImage
								shoe={ this.props.shoe }
								activeShoeImage={ this.props.activeShoeImage }
								changeActiveShoeImage={ this.props.changeActiveShoeImage }
							/>
							<ProductDetails
								shoe={ this.props.shoe }
								addToCart={ this.props.addToCart }
							/>
						</section>
					}
					<section className='container p-4'>
						<div className='d-flex'>
							<div className='w-50 d-flex flex-column align-items center'>
								<h3 className='h4 font-weight-bold text-uppercase'>Reviews ({ this.props.reviews.length })</h3>
								{
									this.props.reviews.length > 0 ?
										(
											this.props.reviews.map(r =>
												<Review key={ r.ReviewId } review={ r } />
											)
										) : (
											<strong className='py-2 text-capitalize'>No Reviews</strong>
										)
								}
							</div>
							<div className='w-50 d-flex flex-column align-items center'>
								<h3 className='h4 font-weight-bold text-uppercase'>Add A Review</h3>

								{
									this.props.user &&
										this.props.shoe ? (
											<ProductReviewForm shoeId={ this.props.shoe.ShoeId } userId={ this.props.user.UserId } />
										) : (
											<strong className='py-2 text-capitalize'>
												Must Be Logged In To Leave Review!
											</strong>
										)
								}
							</div>
						</div>
					</section>
				</div>
			</main>
		);
	}
}

ProductPage.propTypes = {
	shoe: PropTypes.object,
	reviews: PropTypes.array.isRequired,
	shoeId: PropTypes.number.isRequired,
	fetchShoeById: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired,
	getReviewsByShoeId: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	shoeId: Number(ownProps.match.params.shoeId),
	shoe: state.shoeReducer.shoe,
	activeShoeImage: state.shoeReducer.activeShoeImage,
	reviews: state.reviewReducer.reviews,
	user: state.accountReducer.user
});

const mapDispatchToProps = (dispatch) => ({
	fetchShoeById: (id) => dispatch(fetchShoeById(id)),
	addToCart: (shoe) => dispatch(addToCart(shoe)),
	changeActiveShoeImage: (shoeImageId) => dispatch(changeActiveShoeImage(shoeImageId)),
	getReviewsByShoeId: (shoeId) => dispatch(fetchReviewsByShoeId(shoeId)),
	resetReviews: () => dispatch(resetReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);