import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import AccountMenuItem from './AccountMenuItem';
import { NavLink } from 'react-router-dom';
import './css/Menu.css';

const Menu = ({ ...props }) => (
   <div className="container navbar navbar-expand-lg">
      <NavLink to="/" className="navbar-brand mr-4" id="company-name" href="#">
         <h1 className="mb-0">Site Logo</h1>
      </NavLink>
      <nav className="navbar-nav w-100">
         <NavItem activeClassName="" to="/shop">
            Shop
         </NavItem>
         <NavItem activeClassName="" to="/checkout">
            Checkout
         </NavItem>
         <div className="navbar-nav ml-auto">
            {props.user ? (
               <AccountMenuItem />
            ) : (
               <NavItem activeClassName="" to="/login">
                  Join / Login
               </NavItem>
            )}
            <div className="nav-seperator mx-2" />
            <ShoppingCart />
         </div>
      </nav>
   </div>
);

Menu.propTypes = {
   user: PropTypes.object
};

export default Menu;
