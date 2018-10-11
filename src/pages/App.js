import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NotificationList from '../components/notification/NotificationList';
import Quickview from '../components/quickview/Quickview';

import { connect } from 'react-redux';
import { fetchShoes } from '../redux/actions/shoesAction';
import { verifyToken } from '../redux/actions/jwtActions';
import { clearCheckoutReducer } from '../redux/actions/checkoutActions';
import { resetAccountReducer } from '../redux/actions/accountActions';
import { closeQuickview, setShoeSize } from '../redux/actions/shoesAction';
import { addToCart } from '../redux/actions/cartActions';
import { addNotification } from '../redux/actions/notificationActions';
import { NotificationCodes } from '../redux/actions';

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
            <Header />
            <Routes user={ this.props.user } />
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
   pathname: PropTypes.string.isRequired,
   appStart: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   pathname: state.routerReducer.location.pathname,
   cart: state.cartReducer.cart,
   isQuickviewOpen: state.shoeReducer.quickviewOpen,
   quickviewShoe: state.shoeReducer.quickviewShoe,
   user: state.accountReducer.user
});

const mapDispatchToProps = (dispatch) => ({
   appStart: () => {
      dispatch(fetchShoes());
      dispatch(verifyToken());
   },
   clearCheckoutReducer: () => dispatch(clearCheckoutReducer()),
   resetAccountReducer: () => dispatch(resetAccountReducer()),
   addToCart: (shoe, cart) => {
      dispatch(addToCart(shoe, cart));
      dispatch(addNotification(NotificationCodes.ADD_TO_CART));
   },
   changeShoeSize: (size) => dispatch(setShoeSize(size)),
   closeQuickview: () => dispatch(closeQuickview())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
