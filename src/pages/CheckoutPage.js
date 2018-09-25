import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutTitle from '../components/checkout/CheckoutTitle';
import CheckoutDetails from '../components/checkout/CheckoutDetails';
import NoCheckoutItems from '../components/checkout/NoCheckoutItems';
import CheckoutComplete from '../components/checkout/CheckoutComplete';
import CheckoutForm from '../components/form/CheckoutForm';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../redux/actions/cartActions';
import { addNotification } from '../redux/actions/notificationActions';
import { NotificationCodes } from '../redux/actions';

class CheckoutPage extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.total !== this.props.total) return true;
      if (nextProps.cart.length !== this.props.cart.length) return true;
      if (nextProps.completedOrder !== this.props.completedOrder) return true;

      return false;
   }

   render() {
      return (
         <main>
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
                  ) : (
                           <NoCheckoutItems />
                        )
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
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CheckoutPage);
