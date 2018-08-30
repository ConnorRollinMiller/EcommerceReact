import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateUsernameForm from './UpdateUsernameForm';
import UpdateEmailForm from './UpdateEmailForm';
import UpdatePasswordForm from './UpdatePasswordForm';
import { Redirect } from 'react-router-dom';
import './css/ManageAccountPage.css';

import { connect } from 'react-redux';
import {
   accountInputChange,
   submitNewAccountUsername,
   submitNewAccountEmail,
   submitNewAccountPassword
} from '../../redux/actions/accountActions';
import { stat } from 'fs';

class ManageAccountPage extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user !== this.props.user) return true;
      if (nextProps.user.UserId !== this.props.user.UserId) return true;
      if (nextProps.user.UserName !== this.props.user.UserName) return true;
      if (nextProps.user.Email !== this.props.user.Email) return true;

      if (nextProps.newUsername !== this.props.newUsername) return true;
      if (nextProps.accountUserNameError !== this.props.accountUserNameError) return true;
      if (nextProps.accountUserNameErrorMessage !== this.props.accountUserNameErrorMessage) return true;
      if (nextProps.isUsernameChangeComplete !== this.props.isUsernameChangeComplete) return true;

      if (nextProps.newEmail !== this.props.newEmail) return true;
      if (nextProps.accountEmailError !== this.props.accountEmailError) return true;
      if (nextProps.accountEmailErrorMessage !== this.props.accountEmailErrorMessage) return true;
      if (nextProps.isEmailChangeComplete !== this.props.isEmailChangeComplete) return true;

      if (nextProps.currentPassword !== this.props.currentPassword) return true;
      if (nextProps.newPassword !== this.props.newPassword) return true;
      if (nextProps.confirmNewPassword !== this.props.confirmNewPassword) return true;
      if (nextProps.accountPasswordError !== this.props.accountPasswordError) return true;
      if (nextProps.accountPasswordErrorMessage !== this.props.accountPasswordErrorMessage) return true;
      if (nextProps.isPasswordChangeComplete !== this.props.isPasswordChangeComplete) return true;

      return false;
   }

   render() {

      if (!this.props.user) return <Redirect to='/' />

      return (
         <main className='main-section pb-4'>
            <div className='page-title text-center p-4'>
               <h2 className='h3 mb-0 text-uppercase'>
                  Account Settings
					</h2>
            </div>
            <div className='container'>
               <div className='col-12 col-md-10 col-lg-6 py-4 mx-auto'>
                  <UpdateUsernameForm
                     user={ this.props.user }
                     newUsername={ this.props.newUsername }
                     error={ this.props.accountUserNameError }
                     errorMessage={ this.props.accountUserNameErrorMessage }
                     handleInputChange={ this.props.handleInputChange }
                     handleSubmitNewUsername={ this.props.handleSubmitNewUsername }
                     isUsernameChangeComplete={ this.props.isUsernameChangeComplete }
                  />
                  <UpdateEmailForm
                     user={ this.props.user }
                     newEmail={ this.props.newEmail }
                     error={ this.props.accountEmailError }
                     errorMessage={ this.props.accountEmailErrorMessage }
                     handleInputChange={ this.props.handleInputChange }
                     handleSubmitNewEmail={ this.props.handleSubmitNewEmail }
                     isEmailChangeComplete={ this.props.isEmailChangeComplete }
                  />
                  <UpdatePasswordForm
                     user={ this.props.user }
                     currentPassword={ this.props.currentPassword }
                     newPassword={ this.props.newPassword }
                     confirmNewPassword={ this.props.confirmNewPassword }
                     error={ this.props.accountPasswordError }
                     errorMessage={ this.props.accountPasswordErrorMessage }
                     handleInputChange={ this.props.handleInputChange }
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
   newUsername: PropTypes.string.isRequired,
   newEmail: PropTypes.string.isRequired,
   currentPassword: PropTypes.string.isRequired,
   newPassword: PropTypes.string.isRequired,
   confirmNewPassword: PropTypes.string.isRequired,
   isUsernameChangeComplete: PropTypes.bool.isRequired,
   accountUserNameError: PropTypes.bool.isRequired,
   accountUserNameErrorMessage: PropTypes.string,
   isEmailChangeComplete: PropTypes.bool.isRequired,
   accountEmailError: PropTypes.bool.isRequired,
   accountEmailErrorMessage: PropTypes.string,
   isPasswordChangeComplete: PropTypes.bool.isRequired,
   accountPasswordError: PropTypes.bool.isRequired,
   accountPasswordErrorMessage: PropTypes.string,
   handleInputChange: PropTypes.func.isRequired,
   handleSubmitNewUsername: PropTypes.func.isRequired,
   handleSubmitNewEmail: PropTypes.func.isRequired,
   handleSubmitNewPassword: PropTypes.func.isRequired,

}

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   newUsername: state.accountReducer.newUsername,
   newEmail: state.accountReducer.newEmail,
   currentPassword: state.accountReducer.currentPassword,
   newPassword: state.accountReducer.newPassword,
   confirmNewPassword: state.accountReducer.confirmNewPassword,
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
   handleInputChange: (name, value) => dispatch(accountInputChange(name, value)),
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