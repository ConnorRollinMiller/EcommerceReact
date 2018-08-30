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
      if (nextProps.shoe && this.props.shoe) {
         for (let property in this.props.shoe) {
            if (nextProps.shoe[ property ] !== this.props.shoe[ property ]) return true;
         }
      }
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
      if (!this.props.shoe) {
         return (
            <div className='alert alert-danger text-center text-capitalize h5 col-6 mx-auto'>
               Error Fetching Shoe From Server...
				</div>
         )
      }
      return (
         <main className='main-section'>
            <PageTitle displayPageTitle={ false } />
            <div className='container py-4'>
               <section className='row justify-content-center align-items-center mb-4'>
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
               <section className='row text-center'>
                  <ReviewList reviews={ this.props.reviews } />
                  <ReviewForm
                     shoeId={ this.props.shoe.shoeId }
                     user={ this.props.user }
                  />
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
