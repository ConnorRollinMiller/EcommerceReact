import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PrimaryButton from '../button/PrimaryButton';
import { Link } from 'react-router-dom';

class NoCheckoutItems extends Component {
	render() {
		return (
			<div className='checkout-no-items py-4 d-flex flex-column justify-content-center align-items-center'>
				<FontAwesomeIcon className='mb-2 secondary-color' icon='exclamation-triangle' size='5x' />
				<h3 className='text-capitalize my-4'>You don't have any items in your cart!</h3>
				<h4 className='text-capitalize font-weight-bold'>
					<Link className='mt-2' to='/shop'>
						<PrimaryButton largeButton={ true }>Shop Now</PrimaryButton>
					</Link>
				</h4>
			</div>
		);
	}
}

export default NoCheckoutItems;