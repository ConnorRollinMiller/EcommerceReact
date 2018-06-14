import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/PageTitle.css';

class PageTitle extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.path[ nextProps.length - 1 ] !== this.props.path[ this.props.length - 1 ]) {
			return true;
		}
		return false;
	}

	render() {
		this.props.path.shift()
		return (
			<div className='page-title text-center py-4'>
				{
					this.props.displayPageTitle &&
					<h2 className='h3 mb-0 text-capitalize'>{ this.props.path[ this.props.path.length - 1 ] }</h2>
				}
				{
					this.props.displayBreadcrumbs &&
					(
						<h3 className='h4 mt-2 breadcrumbs'>
							<Link className='' to='/'>Home</Link>
							{
								this.props.path &&
								this.props.path.map(p => {
									if (p !== this.props.path[ this.props.path.length - 1 ]) {
										return (
											<span key={ p }> / <Link to={ `/${ p }` }>{ p }</Link></span>
										)
									}
									return (
										<span className='breadcrumbs-path' key={ p }>
											/ { p }
										</span>
									)
								})
							}
						</h3>
					)
				}
			</div>
		)
	}

}

PageTitle.propTypes = {
	displayPageTitle: PropTypes.bool,
	displayBreadcrumbs: PropTypes.bool,
	path: PropTypes.array.isRequired
}

PageTitle.defaultProps = {
	displayPageTitle: true,
	displayBreadcrumbs: true
}

const mapStateToProps = (state, ownProps) => ({
	path: state.routerReducer.location.pathname.split('/'),
});

export default connect(mapStateToProps)(PageTitle);