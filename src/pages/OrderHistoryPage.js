import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getOrderHistory } from '../redux/actions/orderActions';
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
         <React.Fragment>
            {
               this.props.orderHistory.length > 0 ?
                  (
                     <OrderedProductList shoes={ this.props.orderHistory } />
                  ) : (
                     <h3>No Order History...</h3>
                  )
            }
         </React.Fragment>
      );
   }
}

OrderHistoryPage.propTypes = {
   orderHistory: PropTypes.array,
   user: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
   user: ownProps.user,
   orderHistory: state.orderReducer.orderHistory
});

const mapDispatchToProps = (dispatch) => ({
   getOrderHistory: (userId) => dispatch(getOrderHistory(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage);