import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateAccountForm from './UpdateAccountForm';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class ManageAccountPage extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.user !== this.props.user) return true;
		return false;
	}

	render() {

		if (!this.props.user) return <Redirect to='/' />

		return (
			<main className='main-section'>
				<div className='page-title text-center py-4'>
					<h2 className='h3 mb-0 text-capitalize'>
						Account Settings
					</h2>
				</div>
				<div className='container py-4'>
					<UpdateAccountForm />
				</div>
			</main>
		);
	}
}

ManageAccountPage.propTypes = {
	user: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
	user: state.accountReducer.user
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccountPage);