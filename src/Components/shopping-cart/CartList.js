import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartList = ({ ...props }) => (
   <div className='text-center'>
      {
         props.cart.map(item =>
            <CartItem
               key={ item.cartId }
               shoe={ item }
               removeFromCart={ () => props.removeFromCart(item.cartId, item.price) }
            />
         )
      }
   </div>
);

CartList.propTypes = {
   removeFromCart: PropTypes.func,
   cart: PropTypes.array.isRequired
};

export default CartList;
