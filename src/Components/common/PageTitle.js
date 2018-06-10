import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/PageTitle.css';

const PageTitle = ({ ...props }) => {
	const { displayPageTitle = true } = props;
	props.path.shift();
	let lastPathItem = props.path[ props.path.length - 1 ];

	// if (typeof lastPathItem === number) {
	// 	lastPathItem = 
	// }

	return (
		<div className='page-title text-center py-4'>
			{
				displayPageTitle &&
				<h2 className='h3 mb-3 text-capitalize'>{ lastPathItem }</h2>
			}
			<h3 className='h4 m-0 breadcrumbs'>
				<Link className='' to='/'>Home</Link>
				{
					props.path.map(p => {
						if (p !== lastPathItem) {
							return (
								<span key={ p }> / <Link to={ `/${ p }` }>{ p }</Link></span>
							)
						}
						return (
							<span className='breadcrumbs-path' key={ p }> / { p }</span>
						)
					})
				}
			</h3>
		</div>
	)
}

PageTitle.propTypes = {
	displayPageTitle: PropTypes.bool,
	path: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	path: state.routerReducer.location.pathname.split('/')
});

export default connect(mapStateToProps)(PageTitle);