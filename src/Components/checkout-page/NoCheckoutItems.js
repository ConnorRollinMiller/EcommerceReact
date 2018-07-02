import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PrimaryButton from '../button/PrimaryButton';
import { Link } from 'react-router-dom';

class NoCheckoutItems extends Component {
	render() {
		return (
			<div className='py-4 d-flex flex-column justify-content-center align-items-center' style={ { minHeight: '60vh' } }>
				<FontAwesomeIcon className='secondary-color' icon='exclamation-triangle' size='5x' />
				<h2 className='text-capitalize my-4'>You don't have any items in your cart!</h2>
				<Link to='/shop'>
					<PrimaryButton largeButton={ true }>Shop Now</PrimaryButton>
				</Link>
			</div>
		);
	}
}

export default NoCheckoutItems;