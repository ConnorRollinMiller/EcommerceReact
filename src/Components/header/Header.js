import React, { Component } from 'react';
import TopHeader from './TopHeader';
import Menu from './Menu';
import './css/Header.css';

import { connect } from 'react-redux';

class Header extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.user !== this.props.user) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div>
				<TopHeader />
				<header className='py-4' id='header'>
					<Menu user={ this.props.user } />
				</header>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	user: state.accountReducer.user
})

export default connect(mapStateToProps)(Header);