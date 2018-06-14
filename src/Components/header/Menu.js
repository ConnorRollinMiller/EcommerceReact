import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import DownArrow from '../icon/DownArrow';
import './css/Menu.css';

const Menu = ({ ...props }) => (
	<nav className='navbar-collapse mr-auto'>
		<ul className='nav mr-auto'>
			<NavItem activeClassName='' to='/shop'>
				Shop
			</NavItem>
			<NavItem activeClassName='' to='/checkout'>
				Checkout
			</NavItem>
		</ul>

		<ul className='nav right-main-nav'>
			{
				props.user ? (
					<NavItem activeClassName='' to='/account'>
						My Account <DownArrow size='lg' />
					</NavItem>
				) : (
						<NavItem activeClassName='' to='/login'>
							Join / Login
						</NavItem>
					)

			}
			<li className='nav-seperator'></li>
			<ShoppingCart />
		</ul>
	</nav>
);

Menu.propTypes = {
	user: PropTypes.object
}

export default Menu;