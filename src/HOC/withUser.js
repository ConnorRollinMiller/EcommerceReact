import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default (WrappedComponent) => {
   class WithUser extends Component {

      render() {
         return (
            this.props.user ?
               <WrappedComponent user={ this.props.user } /> :
               <Redirect to='/login' />
         )
      }
   }

   const mapStateToProps = (state, ownProps) => ({
      user: state.accountReducer.user
   });

   return connect(mapStateToProps)(WithUser);
};