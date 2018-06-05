import React from 'react';
import TopHeader from './TopHeader';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import './css/Header.css';

const Header = ({ ...props }) => (
	<div>
		<TopHeader />
		<header className='navbar navbar-expand-lg py-4' id='header'>
			<div className='container py-4'>
				<NavLink to='/' className='navbar-brand' id='company-name' href='#'>
					<h1 className='mb-0'>Site Logo</h1>
				</NavLink>
				<Menu />
			</div>
		</header>
	</div>
);

export default Header;