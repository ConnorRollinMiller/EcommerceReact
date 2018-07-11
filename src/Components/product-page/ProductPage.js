import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../common/PageTitle';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ReviewForm from '../review/ReviewForm';
import ReviewList from '../review/ReviewList';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { fetchShoeById, changeActiveShoeImage } from '../../redux/actions/shoesAction';
import { fetchReviewsByShoeId, resetReviews } from '../../redux/actions/reviewActions';
import { addNotification } from '../../redux/actions/notificationActions';
import { NotificationCodes } from '../../redux/actions';

class ProductPage extends Component {
      componentDidMount() {
            this.props.fetchShoeById(this.props.shoeId);
            this.props.getReviewsByShoeId(this.props.shoeId);
      }

      shouldComponentUpdate(nextProps) {
            if (nextProps.shoe !== this.props.shoe) return true;
            if (nextProps.shoeId !== this.props.shoeId) return true;
            if (nextProps.reviews !== this.props.reviews) return true;
            if (nextProps.activeShoeImage !== this.props.activeShoeImage) return true;
            if (nextProps.user !== this.props.user) return true;
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
                        <div className='container py-4'>
                              { this.props.shoe && (
                                    <section className='row justify-content-center align-items-center'>
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
                              ) }
                              <section className='row text-center'>
                                    <div className='col-md-6 flex-column align-items center mb-4'>
                                          <h3 className='h4 font-weight-bold text-uppercase'>
                                                Reviews ({ this.props.reviews.length })
                                           </h3>
                                          { this.props.reviews.length > 0 ? (
                                                <ReviewList reviews={ this.props.reviews } />
                                          ) : (
                                                      <strong className='py-2 text-capitalize'>
                                                            No Reviews
                                                      </strong>
                                                ) }
                                    </div>
                                    <div className='col-md-6 flex-column align-items-center mb-4'>
                                          <h3 className='h4 font-weight-bold text-uppercase'>
                                                Add A Review
                                           </h3>
                                          { this.props.user && this.props.shoe ? (
                                                <ReviewForm
                                                      shoeId={ this.props.shoe.ShoeId }
                                                      user={ this.props.user }
                                                />
                                          ) : (
                                                      <strong className='mt-2 text-capitalize'>
                                                            Must Be Logged In To Leave Review!
                                                      </strong>
                                                ) }
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
};

const mapStateToProps = (state, ownProps) => ({
      shoes: state.shoeReducer.shoes,
      shoeId: Number(ownProps.match.params.shoeId),
      shoe: state.shoeReducer.shoe,
      activeShoeImage: state.shoeReducer.activeShoeImage,
      reviews: state.reviewReducer.reviews,
      user: state.accountReducer.user
});

const mapDispatchToProps = dispatch => ({
      fetchShoeById: id => dispatch(fetchShoeById(id)),
      addToCart: shoe => {
            dispatch(addToCart(shoe));
            dispatch(addNotification(NotificationCodes.ADD_TO_CART));
      },
      changeActiveShoeImage: shoeImageId =>
            dispatch(changeActiveShoeImage(shoeImageId)),
      getReviewsByShoeId: (shoeId) => dispatch(fetchReviewsByShoeId(shoeId)),
      resetReviews: () => dispatch(resetReviews())
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
)(ProductPage);
