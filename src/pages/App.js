import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NotificationList from '../components/notification/NotificationList';
import Quickview from '../components/quickview/Quickview';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShoes } from '../redux/actions/shoesAction';
import { loadCartFromLocalStorage } from '../redux/actions/cartActions';
import { clearCheckoutReducer } from '../redux/actions/checkoutActions';
import { verifyUserJWT, resetAccountReducer, accountLogout } from '../redux/actions/accountActions';
import { closeQuickview, setShoeSize } from '../redux/actions/shoesAction';
import { addToCart } from '../redux/actions/cartActions';
import { addNotification } from '../redux/actions/notificationActions';
import { NotificationCodes } from '../constants';


class App extends Component {

   componentDidMount() {
      this.props.appStart();
   }

   componentDidUpdate(prevProps) {
      if (prevProps.pathname !== this.props.pathname) {
         window.scrollTo(0, 0);
         if (this.props.isQuickviewOpen) {
            this.props.closeQuickview();
         }
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
         <div id="page">
            <Header
               cart={ this.props.cart }
               user={ this.props.user }
               accountLogout={ this.props.accountLogout }
            />
            <Routes user={ this.props.user } location={ this.props.location } />
            <Footer />
            <NotificationList />
            {
               this.props.isQuickviewOpen &&
               <Quickview
                  addToCart={ () => this.props.addToCart(this.props.quickviewShoe, this.props.cart) }
                  closeQuickview={ this.props.closeQuickview }
                  shoe={ this.props.quickviewShoe }
               />
            }
         </div>
      );
   }
}

App.propTypes = {
   quickviewShoe: PropTypes.object,
   user: PropTypes.object,
   history: PropTypes.object.isRequired,
   pathname: PropTypes.string.isRequired,
   cart: PropTypes.array.isRequired,
   isQuickviewOpen: PropTypes.bool.isRequired,
   appStart: PropTypes.func.isRequired,
   clearCheckoutReducer: PropTypes.func.isRequired,
   resetAccountReducer: PropTypes.func.isRequired,
   addToCart: PropTypes.func.isRequired,
   changeShoeSize: PropTypes.func.isRequired,
   closeQuickview: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
   history: ownProps.history,
   pathname: ownProps.history.location.pathname,
   cart: state.cartReducer.cart,
   isQuickviewOpen: state.shoeReducer.quickviewOpen,
   quickviewShoe: state.shoeReducer.quickviewShoe,
   user: state.accountReducer.user
});

const mapDispatchToProps = (dispatch) => ({
   appStart: () => {
      dispatch(verifyUserJWT());
      dispatch(fetchShoes());
      dispatch(loadCartFromLocalStorage());
   },
   clearCheckoutReducer: () => dispatch(clearCheckoutReducer()),
   resetAccountReducer: () => dispatch(resetAccountReducer()),
   addToCart: (shoe, cart) => {
      dispatch(addToCart(shoe, cart));
      dispatch(addNotification(NotificationCodes.ADD_TO_CART));
      dispatch(closeQuickview());
   },
   changeShoeSize: (size) => dispatch(setShoeSize(size)),
   closeQuickview: () => dispatch(closeQuickview()),
   accountLogout: () => dispatch(accountLogout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
