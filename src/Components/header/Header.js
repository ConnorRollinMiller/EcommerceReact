import React, { Component } from 'react';
import TopHeader from './TopHeader';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';
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
				<header className='navbar navbar-expand-lg py-4' id='header'>
					<div className='container py-4'>
						<NavLink to='/' className='navbar-brand' id='company-name' href='#'>
							<h1 className='mb-0'>Site Logo</h1>
						</NavLink>
						<Menu user={ this.props.user } />
					</div>
				</header>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	user: state.accountReducer.user
})

export default connect(mapStateToProps)(Header);