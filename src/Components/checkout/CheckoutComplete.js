import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const CheckoutComplete = ({ ...props }) => (
   <div className='jumbotron col-12 py-4'>
      <h3 className='display-4'>Thank You!</h3>
      <p>
         Your order has been successfully processed and will be shipped
         immediately.
      </p>
      <div className='alert alert-light row py-4'>
         <section className='col-6 p-4'>
            <h4>Tracking #:</h4>
            <p>{ props.orderDetails.orderId }</p>
            <h4>Order Total:</h4>
            <p>${ props.orderDetails.total.toFixed(2) }</p>
            <h4>Shipping Details:</h4>
            <p className='mb-0'>
               { props.orderDetails.firstName }{ ' ' }
               { props.orderDetails.lastName }
            </p>
            <p className='mb-0'>{ props.orderDetails.Address }</p>
            <p>
               { props.orderDetails.city },{ ' ' }
               { props.orderDetails.state }{ ' ' }
               { props.orderDetails.zipCode }
            </p>
            <h4>Contact:</h4>
            <p className='mb-0'>{ props.orderDetails.phone }</p>
            <p>{ props.orderDetails.email }</p>
         </section>
         <section className='col-6 p-4'>
            <h4>Your Order:</h4>
            <div>
               {
                  props.itemsOrdered.map(item => <Item key={ item.shoeId } shoe={ item } />)
               }
            </div>
         </section>
      </div>
   </div>
);

CheckoutComplete.propTypes = {
   itemsOrdered: PropTypes.array.isRequired,
   orderDetails: PropTypes.object.isRequired,
};

export default CheckoutComplete;
