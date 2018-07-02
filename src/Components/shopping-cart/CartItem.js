import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../icon/CloseIcon';
import { Link } from 'react-router-dom';
import './css/CartItem.css';

class CartItem extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }
   render() {
      return (
         <div className="shopping-cart-item d-flex align-items-center justify-content-between px-2 py-3 text-uppercase">
            <img
               className="img-fluid shopping-card-img"
               src={`${this.props.shoe.ImageFolderURL}/1.jpg`}
               alt={`${this.props.shoe.Model} ${this.props.shoe.Colorway}`}
            />
            <div className="text-center text-truncate px-2">
               <Link
                  className="h5 font-weight-bold"
                  to={`/shop/${this.props.shoe.ShoeId}`}
               >
                  <p className="mb-0 text-truncate ">{this.props.shoe.Model}</p>
                  <p className="mb-0 text-truncate ">
                     {this.props.shoe.Colorway}
                  </p>
               </Link>
               <p className="mb-0 font-weight-bold">
                  ${this.props.shoe.Price.toFixed(2)}
               </p>
            </div>
            {this.props.displayCloseIcon && (
               <CloseIcon
                  className="ml-2 shopping-cart-remove-icon"
                  size="2x"
                  onClick={() =>
                     this.props.removeFromCart(
                        this.props.id,
                        this.props.shoe.Price
                     )
                  }
               />
            )}
         </div>
      );
   }
}

CartItem.propTypes = {
   removeFromCart: PropTypes.func,
   shoe: PropTypes.object.isRequired,
   id: PropTypes.number.isRequired,
   displayCloseIcon: PropTypes.bool.isRequired
};

CartItem.defaultProps = {
   displayCloseIcon: true
};

export default CartItem;
