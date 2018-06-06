import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './css/PageNotFound.css';

class PageNotFound extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<div className='py-4 page-not-found d-flex align-items-center justify-content-center flex-column'>
				<FontAwesomeIcon className='secondary-color' icon={ [ 'fa', 'exclamation-triangle' ] } size='5x' />
				<h2 className='display-3 my-4'>Page Not Found</h2>
				<Link to='/shop'>
					<button className='btn btn-primary btn-lg'>Shop Now</button>
				</Link>
			</div>
		)
	}
}

export default PageNotFound;