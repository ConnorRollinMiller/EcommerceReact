import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../button/PrimaryButton';
import UpArrow from '../icon/UpArrow';
import DownArrow from '../icon/DownArrow';
import LinkComponent from '../common/LinkComponent';

class Dropdown extends Component {

	state = {
		isMenuOpen: false
	};

	shouldComponentUpdate(nextProps) {
		if (nextProps.isMenuOpen !== this.state.isMenuOpen) return true;
		return false;
	}

	toggleMenu = () => {
		this.setState(prevState => ({
			isMenuOpen: !prevState.isMenuOpen
		}));
	};

	render() {
		return (
			<div className='dropdown'>
				<div className='nav-item'>
					<span className='nav-link text-nowrap' onClick={ this.toggleMenu }>
						{ this.props.navItemName }{ ' ' }
						{ this.state.isMenuOpen ? (
							<UpArrow size='1x' />
						) : (
								<DownArrow size='1x' />
							) }
					</span>
				</div>
				{ this.state.isMenuOpen && (
					<ul
						className='dropdown-menu text-center'
						style={ { display: 'block' } }
					>
						{ this.props.user ? (
							<React.Fragment>
								{
									this.props.userMenuItems.map(item =>
										<LinkComponent
											className='dropdown-item nav-link font-weight-bold text-capitalize py-2'
											key={ item.path }
											to={ `${ item.path }` }
											onClick={ this.toggleMenu }
										>
											{ item.text }
										</LinkComponent>
									)
								}
								<div className='dropdown-divider' />
								<PrimaryButton
									className='dropdown-item col-10 text-center my-3 mx-auto'
									onClick={ () => {
										this.toggleMenu();
										this.props.logout();
									} }
								>
									Sign Out
                        </PrimaryButton>
							</React.Fragment>
						) : (
								<React.Fragment>
									{ this.props.noUserMenuItems.map(item =>
										<LinkComponent
											className='dropdown-item nav-link font-weight-bold text-capitalize py-2'
											key={ item.path }
											to={ `${ item.path }` }
											onClick={ this.toggleMenu }
										>
											{ item.text }
										</LinkComponent>
									) }
								</React.Fragment>
							) }
					</ul>
				) }
			</div>
		);
	}
}

Dropdown.propTypes = {
	menuItems: PropTypes.array,
	navItemName: PropTypes.string.isRequired,
	logout: PropTypes.func.isRequired
};

export default Dropdown;