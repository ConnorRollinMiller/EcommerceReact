import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../icon/CloseIcon';
import QuickviewDetails from './QuickviewDetails';
import './css/ProductQuickview.css';

import { connect } from 'react-redux';
import { closeQuickview, setShoeSize } from '../../redux/actions/shoesAction';
import { addToCart } from '../../redux/actions/cartActions';
import { addNotification } from '../../redux/actions/notificationActions';
import { NotificationCodes } from '../../redux/actions';

class ProductQuickview extends Component {
   componentDidMount() {
      document.body.style = 'overflow: hidden';
   }

   shouldComponentUpdate(nextProps) {
      if (nextProps.shoe !== this.props.shoe) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      return false;
   }

   componentWillUnmount() {
      document.body.style = 'overflow: auto';
   }

   render() {
      return (
         <div className="quickview-bg container-fluid d-flex justify-content-center align-items-center">
            <article className="container position-relative row align-items-center justify-content-center bg-white rounded p-4">
               <CloseIcon
                  className="quickview-icon"
                  size="2x"
                  onClick={() => this.props.closeQuickview()}
               />
               <div className="col-md-6 my-2">
                  <img
                     className="img-fluid"
                     src={`${this.props.shoe.ImageFolderURL}/1.jpg`}
                     alt={`${this.props.shoe.Model} ${
                        this.props.shoe.Colorway
                     }`}
                  />
               </div>
               <QuickviewDetails
                  shoe={this.props.shoe}
                  onClick={this.props.closeQuickview}
                  errorMessage={this.props.errorMessage}
                  changeShoeSize={this.props.changeShoeSize}
                  addToCart={this.props.addToCart}
               />
            </article>
         </div>
      );
   }
}

ProductQuickview.propTypes = {
   addToCart: PropTypes.func.isRequired,
   closeQuickview: PropTypes.func.isRequired,
   shoe: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   shoe: state.shoeReducer.quickviewShoe,
   errorMessage: state.cartReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
   addToCart: shoe => {
      dispatch(addToCart(shoe));
      dispatch(addNotification(NotificationCodes.ADD_TO_CART));
   },
   changeShoeSize: size => dispatch(setShoeSize(size)),
   closeQuickview: () => dispatch(closeQuickview())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductQuickview);
