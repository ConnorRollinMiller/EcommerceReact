import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import LinkComponent from '../common/LinkComponent';
import './css/Footer.css';

class Footer extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<footer className='container-fluid px-0 text-center' id='footer'>
				<section className='footer-title p-4'>
					<h2 className='mb-0'>Site Name</h2>
				</section>
				<section className='container py-4'>
					<div className='py-2'>
						<div className='mb-4'>
							<FontAwesomeIcon className='footer-payment-option' icon={ [ 'fab', 'cc-visa' ] } size='2x' />
							<FontAwesomeIcon className='footer-payment-option' icon={ [ 'fab', 'cc-amex' ] } size='2x' />
							<FontAwesomeIcon className='footer-payment-option' icon={ [ 'fab', 'cc-discover' ] } size='2x' />
							<FontAwesomeIcon className='footer-payment-option' icon={ [ 'fab', 'cc-mastercard' ] } size='2x' />
							<FontAwesomeIcon className='footer-payment-option' icon={ [ 'fab', 'cc-paypal' ] } size='2x' />
						</div>

						<strong className='mb-0'>
							Designed By:
							{ ' ' }
							<LinkComponent to='https://www.instagram.com/connorbiz/' target='_blank'>
								Connor Miller
							</LinkComponent>
						</strong>

						<div>
							<p className='mb-0'>Copyright 2018 &copy;</p>
						</div>
					</div>
				</section>
			</footer>
		)
	}
}
export default Footer;