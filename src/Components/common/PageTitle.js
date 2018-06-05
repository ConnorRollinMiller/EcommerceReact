import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/PageTitle.css';

const PageTitle = ({ ...props, displayPageTitle = true }) => (
	<div className='page-title text-center py-4'>
		{
			displayPageTitle &&
			<h2 className='h3 mb-3'>Shop</h2>
		}
		<h3 className='h4 m-0 breadcrumbs'>
			<Link className='breadcrumbs-link' to='/'>Home</Link>
			/
			<span className='breadcrumbs-path'>{ props.path }</span>
		</h3>
	</div>
);

PageTitle.propTypes = {
	path: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
	// console.log(state);
	return {
		path: state.routerReducer.location.pathname.replace(/[0-9]/g, '').replace(/\//g, '')
	}
}

export default connect(mapStateToProps)(PageTitle);