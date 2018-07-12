import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import LinkComponent from '../common/LinkComponent';
import Dropdown from './Dropdown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/Menu.css';

const noUserMenuItems = [ { text: 'Login', path: '/login' }, { text: 'Register', path: '/register' } ];
const userMenuItems = [ { text: 'Account Settings', path: '/account' } ]

class Menu extends Component {

   state = {
      isOpen: false
   }

   shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.user !== this.props.user) return true;
      if (nextProps.location.pathname !== this.props.location.pathname) return true;
      if (nextState.isOpen !== this.state.isOpen) return true;
      return false;
   }

   toggleMenu = () => {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
   }

   render() {
      console.log(this.props.location)
      return (
         <div className='container navbar navbar-expand-md'>
            <LinkComponent to='/' className='navbar-brand mr-4'>
               <h1 className='mb-0'>Site Logo</h1>
            </LinkComponent>
            <button className='navbar-toggler' onClick={ this.toggleMenu }>
               <FontAwesomeIcon
                  className='navbar-toggler-icon'
                  icon={ [ 'fas', 'bars' ] }
                  style={ { fontSize: '1.6em' } }
               />
            </button>

            <nav className={ this.state.isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse' }>
               <NavItem activeClassName='' to='/shop' onClick={ this.toggleMenu }>
                  Shop
               </NavItem>
               <NavItem activeClassName='' to='/checkout' onClick={ this.toggleMenu }>
                  Checkout
               </NavItem>
               <Dropdown
                  navItemName='Account'
                  noUserMenuItems={ noUserMenuItems }
                  userMenuItems={ userMenuItems }
                  user={ this.props.user }
                  logout={ this.props.logout }
                  onClick={ this.toggleMenu }
                  location={ this.props.location }
               />

               <div className='navbar-nav ml-auto'>
                  <div className='nav-seperator mr-2' />
                  <ShoppingCart />
               </div>
            </nav>
         </div>
      )
   }
}
Menu.propTypes = {
   user: PropTypes.object,
   logout: PropTypes.func.isRequired
};

export default Menu;
