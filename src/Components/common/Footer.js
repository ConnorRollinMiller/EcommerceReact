import React from 'react';
import FontAwesome from 'react-fontawesome';
import './css/Footer.css';

const Footer = ({ ...props }) => (
	<footer className='container-fluid px-0 text-center bg-light' id='footer'>
		<section className='footer-title p-4'>
			<h2 className='mb-0'>Site Name</h2>
		</section>
		<section className='container py-4'>
			<div className='py-4'>
				<div className='mb-4'>
					<FontAwesome className='footer-payment-option' name='cc-visa' size='2x' />
					<FontAwesome className='footer-payment-option' name='cc-amex' size='2x' />
					<FontAwesome className='footer-payment-option' name='cc-discover' size='2x' />
					<FontAwesome className='footer-payment-option' name='cc-mastercard' size='2x' />
					<FontAwesome className='footer-payment-option' name='cc-paypal' size='2x' />
				</div>

				<strong>
					Designed By <a href='https://www.instagram.com/connorbiz/' target='_blank'>Connor Miller</a>
				</strong>

				<div>
					<p className='mt-2 mb-0'>Copyright 2018 &copy;</p>
				</div>
			</div>
		</section>
	</footer>
);

export default Footer;