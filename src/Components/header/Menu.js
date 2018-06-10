import React, { Component } from 'react';
import NavItem from './NavItem';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import './css/Menu.css';

class Menu extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<nav className='collapse navbar-collapse mr-auto'>
				<ul className='nav mr-auto'>
					<NavItem activeClassName='' to='/shop'>
						Shop
					</NavItem>
					<NavItem activeClassName='' to='/checkout'>
						Checkout
					</NavItem>
				</ul>
				<ul className='nav right-main-nav'>
					<NavItem activeClassName='' to='/login'>
						Join / Login
					</NavItem>

					<li className='nav-seperator'></li>

					<ShoppingCart />
				</ul>
			</nav>
		);
	}
}

export default Menu;