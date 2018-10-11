import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ItemOrdered from '../components/checkout/ItemOrdered';

import { connect } from 'react-redux';
import { getOrderHistory } from '../redux/actions/orderActions';
// import Item from '../components/order-history/Item';
import OrderedProductList from '../components/order-history/OrderedProductList';

class OrderHistoryPage extends Component {

   componentDidMount() {
      this.props.getOrderHistory(this.props.user.userId);
   }

   // shouldComponentUpdate(nextProps) {

   //    if (nextProps.user !== this.props.user) return true;
   //    if (nextProps.orderHistory.length !== this.props.orderHistory.length) return true;

   //    return false;

   // }

   render() {

      return (
         <main className="container py-4">
            {
               // this.props.orderHistory > 0 ?
               //    (
               //       <OrderedProductList shoes={ this.props.orderHistory } />
               //    ) : (
               //       <h3>No Order History...</h3>
               //    )
               <OrderedProductList shoes={ this.props.orderHistory } />
            }
         </main>
      );
   }
}

OrderHistoryPage.propTypes = {
   orderHistory: PropTypes.array,
   user: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   orderHistory: state.orderReducer.orderHistory
});

const mapDispatchToProps = (dispatch) => ({
   getOrderHistory: (userId) => dispatch(getOrderHistory(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage);