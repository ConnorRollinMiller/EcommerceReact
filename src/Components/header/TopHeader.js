import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom'
import './css/TopHeader.css';

const TopHeader = ({ ...props }) => (
	<div className='navbar p-0' id='top-header'>
		<div className='container py-1'>
			<ul className='nav' id='top-header-nav'>
				<li className='m-auto'>
					<FontAwesome className='top-header-icon' name='dropbox' />
					<span className='secondary-color'>Free </span>
					Shipping On All Orders
					<span className='secondary-color'> Over $35</span>
				</li>

				<li className='nav-seperator'></li>

				<li className='m-auto'>
					<FontAwesome className='top-header-icon' name='paper-plane' />
					Support
					<span className='secondary-color'> Email@example.com</span>
				</li>

				<li className='nav-seperator'></li>

				<li className='m-auto'>
					<Link className='top-header-social' to='https://www.facebook.com' target='_blank'>
						<FontAwesome className='top-header-icon-link' name='facebook' />
					</Link>
					<Link className='top-header-social' to='https://www.instagram.com' target='_blank'>
						<FontAwesome className='top-header-icon-link' name='instagram' />
					</Link>
					<Link className='top-header-social' to='https://www.twitter.com' target='_blank'>
						<FontAwesome className='top-header-icon-link' name='twitter' />
					</Link>
				</li>
			</ul>
		</div>
	</div>
);

export default TopHeader;