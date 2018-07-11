import React from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
import LinkComponent from '../common/LinkComponent';

const CartList = ({ ...props }) => (
   <div className='text-center'>
      { props.cart.map(item => (
         <CartItem
            key={ item.id }
            id={ item.id }
            shoe={ item.shoe }
            removeFromCart={ props.removeFromCart }
         />
      )) }
      <hr className='shopping-cart-hr mt-0' />
      <CartTotal total={ props.total }>Total:</CartTotal>
      <LinkComponent
         className='btn btn-primary btn-block text-white text-capitalize mt-2'
         to='/checkout'
      >
         Checkout
      </LinkComponent>
   </div>
);

CartList.propTypes = {
   removeFromCart: PropTypes.func,
   cart: PropTypes.array.isRequired,
   total: PropTypes.string.isRequired
};

export default CartList;
