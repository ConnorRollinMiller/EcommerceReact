import React from 'react';
import PropTypes from 'prop-types';
import TwitterIcon from '../icon/TwitterIcon';
import FacebookIcon from '../icon/FacebookIcon';
import InstagramIcon from '../icon/InstagramIcon';
import EmailIcon from '../icon/EmailIcon';

const siteUrl = 'http://localhost:3000/shop'

const SocialMediaShareProduct = ({ ...props }) => (
	<div>
		<h4 className='h6 text-center font-weight-bold text-uppercase mb-2'>Share:</h4>
		<div className='d-flex justify-content-center'>
			<a className='mx-2' href={ `http://twitter.com/share?url=${ siteUrl }/${ props.shoe.ShoeId }` } target='_blank'>
				<TwitterIcon size='lg' />
			</a>
			<a className='mx-2' href={ `http://facebook.com/sharer.php?u=${ siteUrl }/${ props.shoe.ShoeId }` } target='_blank'>
				<FacebookIcon size='lg' />
			</a>
			<a className='mx-2' href={ `http://instagram.com/` } target='_blank'>
				<InstagramIcon size='lg' />
			</a>
			<a
				className='mx-2'
				href={ `mailto:enteremail@here.com?
						subject=${props.shoe.Brand } ${ props.shoe.Model } ${ props.shoe.Colorway }&
						body=Check This Out: ${ siteUrl }/${ props.shoe.ShoeId }` }
			>
				<EmailIcon size='lg' />
			</a>
		</div>
	</div>
);

SocialMediaShareProduct.propTypes = {
	shoe: PropTypes.object.isRequired
}

export default SocialMediaShareProduct;