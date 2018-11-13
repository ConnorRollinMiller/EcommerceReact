import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import CartIcon from './CartIcon';
import ShoppingCartDropdown from './ShoppingCartDropdown';
import './css/ShoppingCart.css';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';
import { addNotification } from '../../redux/actions/notificationActions';
import { NotificationCodes } from '../../constants';

class ShoppingCart extends Component {

   state = {
      isOpen: false
   }

   shouldComponentUpdate(nextProps, nextState) {

      if (nextState.isOpen !== this.state.isOpen) return true;
      if (nextProps.cart.length !== this.props.cart.length) return true;
      if (nextProps.total !== this.props.total) return true;
      if (nextProps.pathname !== this.props.pathname) return true;

      return false;
   }

   componentDidUpdate(nextProps) {
      if (nextProps.pathname !== this.props.pathname) {
         this.setState({ isOpen: false });
      }
      if (nextProps.cart !== this.props.cart) {
         localStorage.setItem('CART', JSON.stringify(this.props.cart));
      }
   }

   toggleMenu = () => {
      this.setState(prevState => ({
         isOpen: !prevState.isOpen
      }));
   };

   render() {
      return (
         <div className={ this.state.isOpen ? 'secondary-color' : '' } id='shopping-cart'>
            <div className='nav-link d-flex align-items-center' onClick={ this.toggleMenu }>
               <CartTotal total={ this.props.total.toFixed(2) }>
                  Cart /
               </CartTotal>
               <CartIcon itemNumber={ this.props.cart.length } />
            </div>
            <div className={ 'shopping-cart-container dropdown-menu bg-white px-2 py-4 rounded text-center '.concat(this.state.isOpen && 'show') }>
               <ShoppingCartDropdown
                  cart={ this.props.cart }
                  total={ this.props.total.toFixed(2) }
                  removeFromCart={ this.props.removeFromCart }
               />
            </div>
         </div>
      );
   }
}

ShoppingCart.propTypes = {
   cart: PropTypes.array.isRequired,
   total: PropTypes.number.isRequired,
   removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
   cart: state.cartReducer.cart,
   total: state.cartReducer.total
});

const mapDispatchToProps = (dispatch) => ({
   removeFromCart: (id, price, cart) => {
      dispatch(removeItemFromCart(id, price));
      dispatch(addNotification(NotificationCodes.REMOVE_FROM_CART))
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);