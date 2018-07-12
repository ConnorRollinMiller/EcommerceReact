import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopHeader from './TopHeader';
import Menu from './Menu';
import './css/Header.css';

import { connect } from 'react-redux';
import { accountLogout } from '../../redux/actions/accountActions';

class Header extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.user !== this.props.user) return true;
      if (nextProps.location.pathname !== this.props.location.pathname) return true;
      return false;
   }

   render() {
      return (
         <div>
            <TopHeader />
            <header className='py-4' id='header'>
               <Menu
                  user={ this.props.user }
                  logout={ this.props.accountLogout }
                  location={ this.props.location }
               />
            </header>
         </div>
      );
   }
}

Header.propTypes = {
   user: PropTypes.object,
   accountLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   location: state.routerReducer.location
});

const mapDispatchToProps = dispatch => ({
   accountLogout: () => dispatch(accountLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
