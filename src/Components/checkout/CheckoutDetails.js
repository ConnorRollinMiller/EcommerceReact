import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../shopping-cart/CartItem';
import CartList from '../shopping-cart/CartList';

class CheckoutDetails extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.total !== this.props.total) return true;
      if (nextProps.cart.length !== this.props.cart.length) return true;

      return false;

   }

   render() {
      return (
         <div className='col-md-6 text-center py-4'>
            <hr className='mt-0' />

            <strong className='h4 mb-0'>
               Total:{ ' ' }
               <span className='secondary-color font-weight-bold'>
                  ${ this.props.total.toFixed(2) }
               </span>
            </strong>

            <hr className='' />

            <CartList cart={ this.props.cart } removeFromCart={ this.props.removeFromCart } />
         </div>
      );
   }
}

CheckoutDetails.propTypes = {
   cart: PropTypes.array.isRequired,
   total: PropTypes.number.isRequired,
   removeFromCart: PropTypes.func.isRequired
};

export default CheckoutDetails;
