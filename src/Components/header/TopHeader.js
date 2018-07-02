import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import './css/TopHeader.css';

class TopHeader extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<div className='navbar p-0' id='top-header' >
				<div className='container py-2'>
					<ul className='nav' id='top-header-nav'>
						<li className='m-auto'>
							<FontAwesomeIcon className='top-header-icon' icon={ [ 'fa', 'box-open' ] } />
							<span className='secondary-color'>Free </span>
							Shipping On All Orders
							<span className='secondary-color'> Over $35</span>
						</li>

						<li className='nav-seperator d-none d-lg-block'></li>

						<li className='m-auto d-none d-lg-block'>
							<FontAwesomeIcon
								className='top-header-icon'
								icon={ [ 'fas', 'paper-plane' ] }
							/>
							Support
							<span className='secondary-color'> Email@example.com</span>
						</li>

						<li className='nav-seperator d-none d-sm-block'></li>

						<li className='m-auto d-none d-sm-block'>
							<Link className='top-header-social' to='https://www.facebook.com' target='_blank'>
								<FontAwesomeIcon
									className='top-header-icon-link'
									icon={ [ 'fab', 'facebook' ] }
								/>
							</Link>
							<Link className='top-header-social' to='https://www.instagram.com' target='_blank'>
								<FontAwesomeIcon
									className='top-header-icon-link'
									icon={ [ 'fab', 'instagram' ] }
								/>
							</Link>
							<Link className='top-header-social' to='https://www.twitter.com' target='_blank'>
								<FontAwesomeIcon
									className='top-header-icon-link'
									icon={ [ 'fab', 'twitter' ] }
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default TopHeader;