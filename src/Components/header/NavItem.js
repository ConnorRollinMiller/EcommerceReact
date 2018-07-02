import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ ...props }) => (
	<div className='nav-item'>
		<NavLink className='nav-link' activeClassName={ props.activeClassName } to={ props.to }>
			{ props.children }
		</NavLink>
	</div>
);

NavItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string
	]),
	activeClassName: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired
}

export default NavItem;