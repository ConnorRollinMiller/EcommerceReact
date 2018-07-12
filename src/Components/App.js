import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from '../Routes';
import Header from './header/Header';
import Footer from './common/Footer';
import NotificationList from './notification/NotificationList';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoes } from '../redux/actions/shoesAction';
import { verifyToken } from '../redux/actions/accountActions';
import { getToken } from '../utilities/localStorage';

class App extends Component {

   componentDidMount() {
      this.props.appStart();
   }

   componentDidUpdate(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
         window.scrollTo(0, 0);
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
   appStart: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
   appStart: async () => {
      dispatch(fetchShoes());
      const token = await getToken();
      await dispatch(verifyToken(token));
   }
});

export default withRouter(connect(
   null,
   mapDispatchToProps
)(App));
