import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';
import './css/PageTitle.css';

import { connect } from 'react-redux';

class PageTitle extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.displayBreadcrumbs !== this.props.displayBreadcrumbs) return true;
		if (nextProps.displayPageTitle !== this.props.displayPageTitle) return true;
		if (nextProps.path.length !== this.props.path.length) return true;
		for (let i = 0; i < nextProps.path.length; i++) {
			if (nextProps.path[ i ] !== this.props.path[ i ]) return true;
		}
		return false;
	}

	render() {
		return (
			<div className='page-title text-center py-4'>
				{
					this.props.displayPageTitle && (
						<h2 className='h3 mb-0 text-uppercase'>
							{ this.props.path[ this.props.path.length - 1 ] }
						</h2>
					)
				}
				{
					this.props.displayBreadcrumbs && (
						<h3 className='h4 mt-2 breadcrumbs'>
							<LinkComponent to='/'>
								Home
                  	</LinkComponent>
							{
								this.props.path &&
								this.props.path.map(p => {
									if (p !== this.props.path[ this.props.path.length - 1 ]) {
										return (
											<span key={ p }>
												{ ' ' }
												/ <LinkComponent to={ `/${ p }` }>
                                       { p }
                                    </LinkComponent>
											</span>
										);
									}
									return (
										<span className='breadcrumbs-path' key={ p }>
											/ { p }
										</span>
									);
								})
							}
						</h3>
					)
				}
			</div>
		);
	}
}

PageTitle.propTypes = {
	displayPageTitle: PropTypes.bool,
	displayBreadcrumbs: PropTypes.bool,
	path: PropTypes.array.isRequired
};

PageTitle.defaultProps = {
	displayPageTitle: true,
	displayBreadcrumbs: true
};

const mapStateToProps = (state, ownProps) => ({
	path: state.routerReducer.location.pathname.split('/').slice(1)
});

export default connect(mapStateToProps)(PageTitle);
