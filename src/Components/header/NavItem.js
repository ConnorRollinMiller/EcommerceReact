import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ ...props }) => (
	<li className='nav-item'>
		<NavLink className='nav-link' activeClassName={ props.activeClassName } to={ props.to }>
			{ props.children }
		</NavLink>
	</li>
);

NavItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	activeClassName: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired
}

export default NavItem;