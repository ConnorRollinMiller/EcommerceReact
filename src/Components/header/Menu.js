import React from 'react';
import ShoppingCart from './ShoppingCart';
import { NavLink } from 'react-router-dom';
import './css/Menu.css';

const Menu = ({ ...props }) => (
	<nav className='collapse navbar-collapse mr-auto'>
		<ul className='nav mr-auto'>
			<li className='nav-item'>
				<NavLink className='nav-link' activeClassName='' to='/shop'>Shop</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' activeClassName='' to='/checkout'>Checkout</NavLink>
			</li>
		</ul>
		<ul className='nav right-main-nav'>
			<li className='nav-item'>
				<NavLink className='nav-link' activeClassName='' to='/account'>Join / Login</NavLink>
			</li>

			<li className='nav-seperator'></li>

			<ShoppingCart />
		</ul>
	</nav>
);

export default Menu;