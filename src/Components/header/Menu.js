import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import LinkComponent from '../common/LinkComponent';
import Dropdown from './Dropdown';
import './css/Menu.css';

const noUserMenuItems = [ { text: 'Login', path: '/login' }, { text: 'Register', path: '/register' } ];
const userMenuItems = [ { text: 'Account Settings', path: '/account' } ]

const Menu = ({ ...props }) => (
   <div className='container navbar navbar-expand-md'>
      <LinkComponent to='/' className='navbar-brand mr-4'>
         <h1 className='mb-0'>Site Logo</h1>
      </LinkComponent>
      <nav className='collapse navbar-collapse'>
         <NavItem activeClassName='' to='/shop'>
            Shop
         </NavItem>
         <NavItem activeClassName='' to='/checkout'>
            Checkout
         </NavItem>
         <Dropdown
            navItemName='Account'
            noUserMenuItems={ noUserMenuItems }
            userMenuItems={ userMenuItems }
            user={ props.user }
            logout={ props.logout }
         />

         <div className='navbar-nav ml-auto'>
            <div className='nav-seperator mx-2' />
            <ShoppingCart />
         </div>
      </nav>
   </div>
);

Menu.propTypes = {
   user: PropTypes.object,
   logout: PropTypes.func.isRequired
};

export default Menu;
