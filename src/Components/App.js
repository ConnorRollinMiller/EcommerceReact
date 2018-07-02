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

class App extends Component {
   async componentDidMount() {
      this.props.appStart();
   }

   shouldComponentUpdate(nextProps) {
      if (nextProps.path !== this.props.path) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div id="page">
            <Header />
            <Routes />
            <Footer />
            <NotificationList />
         </div>
      );
   }
}

App.propTypes = {
   path: PropTypes.string.isRequired,
   appStart: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   path: state.routerReducer.location.pathname
});

const mapDispatchToProps = dispatch => ({
   appStart: async () => {
      dispatch(fetchShoes());
      const token = await getToken();
      dispatch(verifyToken(token));
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
