import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemOrdered from './ItemOrdered';

class CheckoutComplete extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <div className='jumbotron col-12'>
            <h3 className='display-4'>Thank You!</h3>
            <p>
               Your order has been successfully processed and will be shipped
               immediately.
               </p>
            <div className='alert alert-light row py-4'>
               <section className='col-6 px-0'>
                  <h4>Tracking #:</h4>
                  <p>{ this.props.orderDetails.OrderId }</p>
                  <h4>Order Total:</h4>
                  <p>${ this.props.orderDetails.Total.toFixed(2) }</p>
                  <h4>Shipping Details:</h4>
                  <p className='mb-0'>
                     { this.props.orderDetails.FirstName }{ ' ' }
                     { this.props.orderDetails.LastName }
                  </p>
                  <p className='mb-0'>{ this.props.orderDetails.Address }</p>
                  <p>
                     { this.props.orderDetails.City },{ ' ' }
                     { this.props.orderDetails.State }{ ' ' }
                     { this.props.orderDetails.ZipCode }
                  </p>
                  <h4>Contact:</h4>
                  <p className='mb-0'>{ this.props.orderDetails.Phone }</p>
                  <p>{ this.props.orderDetails.Email }</p>
               </section>
               <section className='col-6 px-0'>
                  <h4>Your Order:</h4>
                  <div>
                     { this.props.itemsOrdered.map(item => (
                        <ItemOrdered key={ item.id } shoe={ item.shoe } />
                     )) }
                  </div>
               </section>
            </div>
         </div>
      );
   }
}

CheckoutComplete.propTypes = {
   itemsOrdered: PropTypes.array.isRequired,
   orderDetails: PropTypes.object.isRequired,
   clearCheckoutReducer: PropTypes.func.isRequired
};

export default CheckoutComplete;
