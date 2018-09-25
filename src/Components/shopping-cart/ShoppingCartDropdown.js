import React from 'react';
import PropTypes from 'prop-types';
import CartList from './CartList';
import CartTotal from './CartTotal';
import LinkComponent from '../common/LinkComponent';

const ShoppingCartDropdown = ({ ...props }) => (
   <React.Fragment>
      {
         props.cart.length > 0 ?
            (
               <div>
                  <CartList
                     cart={ props.cart }
                     removeFromCart={ props.removeFromCart }
                  />
                  <hr className='shopping-cart-hr mt-0' />
                  <CartTotal total={ props.total }>Total:</CartTotal>
                  <LinkComponent className='btn btn-primary btn-block text-white text-capitalize mt-2' to='/checkout'>
                     Checkout
                  </LinkComponent>
               </div>
            ) : (
               <strong className='secondary-color h5 font-weight-bold'>
                  No Items In Cart
               </strong>
            )
      }
   </React.Fragment>
);

ShoppingCartDropdown.propTypes = {
   removeFromCart: PropTypes.func.isRequired,
   cart: PropTypes.array.isRequired,
   total: PropTypes.string.isRequired
}

export default ShoppingCartDropdown;