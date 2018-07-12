import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutTitle from './CheckoutTitle';
import CheckoutDetails from './CheckoutDetails';
import NoCheckoutItems from './NoCheckoutItems';
import CheckoutComplete from './CheckoutComplete';
import CheckoutForm from './CheckoutForm';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';
import { addNotification } from '../../redux/actions/notificationActions';
import { clearCheckoutReducer } from '../../redux/actions/checkoutActions';
import { NotificationCodes } from '../../redux/actions';

class CheckoutPage extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.total !== this.props.total) return true;
      if (nextProps.cart.length !== this.props.cart.length) return true;
      if (nextProps.completedOrder !== this.props.completedOrder) return true;

      return false;
   }

   componentWillUnmount() {
      this.props.clearCheckoutReducer();
   }

   render() {
      return (
         <main className=''>
            {
               this.props.cart.length > 0 &&
               <CheckoutTitle checkoutSuccess={ this.props.completedOrder } />
            }
            {
               this.props.completedOrder &&
               <CheckoutTitle checkoutSuccess={ this.props.completedOrder } />
            }
            <div className='container-fluid row p-4 m-0'>
               {
                  this.props.completedOrder ? (
                     <CheckoutComplete
                        itemsOrdered={ this.props.itemsOrdered }
                        orderDetails={ this.props.orderDetails }
                        clearCheckoutReducer={ () => this.props.clearCheckoutReducer }
                     />
                  ) : this.props.cart.length > 0 ? (
                     <React.Fragment>
                        <CheckoutDetails
                           total={ this.props.total }
                           cart={ this.props.cart }
                           removeFromCart={ this.props.removeFromCart }
                        />
                        <CheckoutForm />
                     </React.Fragment>
                  ) : <NoCheckoutItems />
               }
            </div>
         </main>
      );
   }
}

CheckoutPage.propTypes = {
   orderDetails: PropTypes.object,
   itemsOrdered: PropTypes.array,
   total: PropTypes.number.isRequired,
   cart: PropTypes.array.isRequired,
   completedOrder: PropTypes.bool.isRequired,
   removeFromCart: PropTypes.func.isRequired,
   clearCheckoutReducer: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   cart: state.cartReducer.cart,
   total: state.cartReducer.total,
   completedOrder: state.checkoutReducer.completedOrder,
   orderDetails: state.checkoutReducer.orderDetails,
   itemsOrdered: state.checkoutReducer.itemsOrdered
});

const mapDispatchToProps = dispatch => ({
   removeFromCart: (id, price) => {
      dispatch(removeItemFromCart(id, price));
      dispatch(addNotification(NotificationCodes.REMOVE_FROM_CART));
   },
   clearCheckoutReducer: () => dispatch(clearCheckoutReducer())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CheckoutPage);
