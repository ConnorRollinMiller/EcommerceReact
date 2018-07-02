import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../shopping-cart/CartItem';
import CheckoutForm from './CheckoutForm';

class CheckoutDetails extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.cart !== this.props.cart) {
         return true;
      } else if (nextProps.total !== this.props.total) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div className="row container-fluid py-4">
            <div className="col-md-6 flex-column p-4 text-center">
               <hr className="col-12 mt-0" />

               <strong className="h4 mb-0">
                  Total:{' '}
                  <span className="secondary-color font-weight-bold">
                     ${this.props.total.toFixed(2)}
                  </span>
               </strong>

               <hr className="col-12" />

               {this.props.cart.map(item => (
                  <CartItem
                     key={item.id}
                     id={item.id}
                     shoe={item.shoe}
                     removeFromCart={this.props.removeFromCart}
                  />
               ))}
            </div>
            <CheckoutForm />
         </div>
      );
   }
}

CheckoutDetails.propTypes = {
   cart: PropTypes.array.isRequired,
   total: PropTypes.number.isRequired
};

export default CheckoutDetails;
