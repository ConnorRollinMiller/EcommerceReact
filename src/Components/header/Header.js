import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopHeader from './TopHeader';
import Menu from './Menu';
import './css/Header.css';

import { connect } from 'react-redux';
import { accountLogout } from '../../redux/actions/accountActions';
import LinkComponent from '../common/LinkComponent';

class Header extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.user !== this.props.user) return true;
      if (nextProps.pathname !== this.props.pathname) return true;

      return false;

   }

   render() {
      return (
         <header>
            <TopHeader />
            <div className='py-4' id='header'>
               <Menu
                  user={ this.props.user }
                  accountLogout={ () => this.props.accountLogout(this.props.cart) }
                  pathname={ this.props.pathname }
               />
            </div>
         </header>
      );
   }
}

Header.propTypes = {
   user: PropTypes.object,
   accountLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   pathname: state.routerReducer.location.pathname,
   cart: state.cartReducer.cart
});

const mapDispatchToProps = (dispatch) => ({
   accountLogout: () => dispatch(accountLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
