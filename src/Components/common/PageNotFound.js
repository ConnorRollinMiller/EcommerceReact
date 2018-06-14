import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PrimaryButton from '../button/PrimaryButton';
import './css/PageNotFound.css';

class PageNotFound extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<main className='main-section py-4 d-flex align-items-center justify-content-center flex-column'>
				<FontAwesomeIcon className='secondary-color' icon={ [ 'fa', 'exclamation-triangle' ] } size='5x' />
				<h2 className='my-4'>404: Page Not Found</h2>
				<Link to='/shop'>
					<PrimaryButton largeButton={ true }>Shop Now</PrimaryButton>
				</Link>
			</main>
		)
	}
}

export default PageNotFound;