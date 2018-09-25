import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateUsernameForm from '../components/form/UpdateUsernameForm';
import UpdateEmailForm from '../components/form/UpdateEmailForm';
import UpdatePasswordForm from '../components/form/UpdatePasswordForm';
import './css/ManageAccountPage.css';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
   submitNewAccountUsername,
   submitNewAccountEmail,
   submitNewAccountPassword
} from '../redux/actions/accountActions';

class ManageAccountPage extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user !== this.props.user) return true;
      if (nextProps.user.userId !== this.props.user.userId) return true;
      if (nextProps.user.username !== this.props.user.username) return true;
      if (nextProps.user.email !== this.props.user.email) return true;

      if (nextProps.accountUserNameError !== this.props.accountUserNameError) return true;
      if (nextProps.accountUserNameErrorMessage !== this.props.accountUserNameErrorMessage) return true;
      if (nextProps.isUsernameChangeComplete !== this.props.isUsernameChangeComplete) return true;

      if (nextProps.accountEmailError !== this.props.accountEmailError) return true;
      if (nextProps.accountEmailErrorMessage !== this.props.accountEmailErrorMessage) return true;
      if (nextProps.isEmailChangeComplete !== this.props.isEmailChangeComplete) return true;

      if (nextProps.accountPasswordError !== this.props.accountPasswordError) return true;
      if (nextProps.accountPasswordErrorMessage !== this.props.accountPasswordErrorMessage) return true;
      if (nextProps.isPasswordChangeComplete !== this.props.isPasswordChangeComplete) return true;

      return false;
   }

   render() {

      if (!this.props.user) return <Redirect to='/' />

      return (
         <main className='main-section'>
            <div className='page-title text-center p-4'>
               <h2 className='h3 mb-0 text-uppercase'>
                  Account Settings
					</h2>
            </div>
            <div className='container'>
               <div className='col-12 col-md-10 col-lg-6 my-4 py-4 mx-auto'>
                  <h3 className='font-weight-bold'>Account</h3>
                  <hr />
                  <UpdateUsernameForm
                     user={ this.props.user }
                     error={ this.props.accountUserNameError }
                     errorMessage={ this.props.accountUserNameErrorMessage }
                     handleSubmitNewUsername={ this.props.handleSubmitNewUsername }
                     isUsernameChangeComplete={ this.props.isUsernameChangeComplete }
                  />
                  <UpdateEmailForm
                     user={ this.props.user }
                     error={ this.props.accountEmailError }
                     errorMessage={ this.props.accountEmailErrorMessage }
                     handleSubmitNewEmail={ this.props.handleSubmitNewEmail }
                     isEmailChangeComplete={ this.props.isEmailChangeComplete }
                  />
                  <h3 className='font-weight-bold'>Password</h3>
                  <hr />
                  <UpdatePasswordForm
                     user={ this.props.user }
                     error={ this.props.accountPasswordError }
                     errorMessage={ this.props.accountPasswordErrorMessage }
                     handleSubmitNewPassword={ this.props.handleSubmitNewPassword }
                     isPasswordChangeComplete={ this.props.isPasswordChangeComplete }
                  />
               </div>
            </div>
         </main>
      );
   }
}

ManageAccountPage.propTypes = {
   user: PropTypes.object,
   isUsernameChangeComplete: PropTypes.bool.isRequired,
   accountUserNameError: PropTypes.bool.isRequired,
   accountUserNameErrorMessage: PropTypes.string,
   isEmailChangeComplete: PropTypes.bool.isRequired,
   accountEmailError: PropTypes.bool.isRequired,
   accountEmailErrorMessage: PropTypes.string,
   isPasswordChangeComplete: PropTypes.bool.isRequired,
   accountPasswordError: PropTypes.bool.isRequired,
   accountPasswordErrorMessage: PropTypes.string,
   handleSubmitNewUsername: PropTypes.func.isRequired,
   handleSubmitNewEmail: PropTypes.func.isRequired,
   handleSubmitNewPassword: PropTypes.func.isRequired,

}

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   newEmail: state.accountReducer.newEmail,
   isUsernameChangeComplete: state.accountReducer.isUsernameChangeComplete,
   accountUserNameError: state.accountReducer.accountUserNameError,
   accountUserNameErrorMessage: state.accountReducer.accountUserNameErrorMessage,
   isEmailChangeComplete: state.accountReducer.isEmailChangeComplete,
   accountEmailError: state.accountReducer.accountEmailError,
   accountEmailErrorMessage: state.accountReducer.accountEmailErrorMessage,
   isPasswordChangeComplete: state.accountReducer.isPasswordChangeComplete,
   accountPasswordError: state.accountReducer.accountPasswordError,
   accountPasswordErrorMessage: state.accountReducer.accountPasswordErrorMessage
});

const mapDispatchToProps = (dispatch) => ({
   handleSubmitNewUsername: (e, userId, currentUsername, newUsername) => {
      e.preventDefault();
      dispatch(submitNewAccountUsername(userId, currentUsername, newUsername));
   },
   handleSubmitNewEmail: (e, userId, currentEmail, newEmail) => {
      e.preventDefault();
      dispatch(submitNewAccountEmail(userId, currentEmail, newEmail));
   },
   handleSubmitNewPassword: (e, userId, currentPassword, newPassword, confirmNewPassword) => {
      e.preventDefault();
      dispatch(submitNewAccountPassword(userId, currentPassword, newPassword, confirmNewPassword));
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccountPage);