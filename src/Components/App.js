import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from '../Routes';
import Header from './header/Header';
import Footer from './common/Footer';
import NotificationList from './notification/NotificationList';

import { connect } from 'react-redux';
import { fetchShoes } from '../redux/actions/shoesAction';
import { verifyToken } from '../redux/actions/accountActions';
import { getToken } from '../utilities/localStorage';
import { clearCheckoutReducer } from '../redux/actions/checkoutActions';
import { resetAccountReducer } from '../redux/actions/accountActions';

class App extends Component {

   componentDidMount() {
      this.props.appStart();
   }

   componentDidUpdate(prevProps) {
      if (prevProps.pathname !== this.props.pathname) {
         window.scrollTo(0, 0);
      }
      if (prevProps.pathname === '/checkout' && this.props.pathname !== '/checkout') {
         this.props.clearCheckoutReducer();
      }
      if (prevProps.pathname === '/login' && this.props.pathname !== '/login') {
         this.props.resetAccountReducer();
      }
      if (prevProps.pathname === '/register' && this.props.pathname !== '/register') {
         this.props.resetAccountReducer();
      }
      if (prevProps.pathname === '/account' && this.props.pathname !== '/account') {
         this.props.resetAccountReducer();
      }
   }

   render() {
      return (
         <div id='page'>
            <Header />
            <Routes />
            <Footer />
            <NotificationList />
         </div>
      );
   }
}

App.propTypes = {
   pathname: PropTypes.string.isRequired,
   appStart: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   pathname: state.routerReducer.location.pathname
})

const mapDispatchToProps = dispatch => ({
   appStart: async () => {
      dispatch(fetchShoes());
      const token = await getToken();
      await dispatch(verifyToken(token));
   },
   clearCheckoutReducer: () => dispatch(clearCheckoutReducer()),
   resetAccountReducer: () => dispatch(resetAccountReducer())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
