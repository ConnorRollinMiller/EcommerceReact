import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './css/PageNotFound.css';

const PageNotFound = ({ ...props }) => (
	<div className='py-4 page-not-found d-flex align-items-center justify-content-center flex-column'>
		<FontAwesome className='secondary-color' name='exclamation-triangle' size='5x' />
		<h2 className='display-3 my-4'>Page Not Found</h2>
		<Link to='/shop'>
			<button className='btn btn-primary btn-lg'>Shop Now</button>
		</Link>
	</div>
);

export default PageNotFound;