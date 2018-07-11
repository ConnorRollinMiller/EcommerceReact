import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Input from '../form/Input';
import InputWithButton from '../form/InputWithButton';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import { accountInputChange, submitNewAccountUserName, submitNewAccountEmail, submitNewAccountPassword } from '../../redux/actions/accountActions';

class UpdateAccountForm extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user.UserName !== this.props.user.UserName) return true;
      if (nextProps.user.Email !== this.props.user.Email) return true;
      if (nextProps.newUsername !== this.props.newUsername) return true;
      if (nextProps.newEmail !== this.props.newEmail) return true;
      if (nextProps.currentPassword !== this.props.currentPassword) return true;
      if (nextProps.newPassword !== this.props.newPassword) return true;
      if (nextProps.confirmNewPassword !== this.props.confirmNewPassword) return true;
      if (nextProps.accountUserNameError !== this.props.accountUserNameError) return true;
      if (nextProps.accountUserNameErrorMessage !== this.props.accountUserNameErrorMessage) return true;
      if (nextProps.accountEmailError !== this.props.accountEmailError) return true;
      if (nextProps.accountEmailErrorMessage !== this.props.accountEmailErrorMessage) return true;
      if (nextProps.accountPasswordError !== this.props.accountPasswordError) return true;
      if (nextProps.accountPasswordErrorMessage !== this.props.accountPasswordErrorMessage) return true;
      return false;
   }

   render() {
      return (
         <div className='col-6 mx-auto py-4'>
            <div className='mb-4'>
               <Form
                  className=''
                  onSubmit={ e => this.props.handleSubmitNewUserName(
                     e,
                     this.props.user.UserId,
                     this.props.user.UserName,
                     this.props.newUsername
                  ) }>
                  <h4 className=''>
                     Information
                  </h4>
                  {
                     this.props.accountUserNameError &&
                     <div className='alert alert-danger'>
                        { this.props.accountUserNameErrorMessage }
                     </div>
                  }
                  <InputWithButton
                     labelText='Username'
                     placeholder='Username'
                     type='text'
                     name='newUsername'
                     value={ this.props.newUsername }
                     buttonText='Submit'
                     onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
                  />
               </Form>
               <Form
                  className=''
                  onSubmit={ e => this.props.handleSubmitNewEmail(
                     e,
                     this.props.user.UserId,
                     this.props.newEmail
                  ) }>
                  {
                     this.props.accountEmailError &&
                     <div className='alert alert-danger'>
                        { this.props.accountEmailErrorMessage }
                     </div>
                  }
                  <InputWithButton
                     labelText='Email'
                     placeholder='Email'
                     type='text'
                     name='newEmail'
                     value={ this.props.newEmail }
                     buttonText='Submit'
                     onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
                  />
               </Form>
            </div>

            <Form
               onSubmit={ e => this.props.handleSubmitNewPassword(
                  e,
                  this.props.user.UserId,
                  this.props.currentPassword,
                  this.props.newPassword,
                  this.props.confirmNewPassword
               ) }>
               <h4>
                  Password
               </h4>
               {
                  this.props.accountPasswordError &&
                  <div className='alert alert-danger'>
                     { this.props.accountPasswordErrorMessage }
                  </div>
               }
               <Input
                  labelText='Current Password'
                  type='password'
                  name='currentPassword'
                  placeholder='Current Password'
                  value={ this.props.currentPassword }
                  onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
               />
               <Input
                  labelText='New Password'
                  type='text'
                  name='newPassword'
                  placeholder='Password'
                  value={ this.props.newPassword }
                  onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
               />
               <Input
                  labelText='Confirm Password'
                  type='text'
                  name='confirmNewPassword'
                  placeholder='Confirm Password'
                  value={ this.props.confirmNewPassword }
                  onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
               />
               <PrimaryButton>
                  Submit
               </PrimaryButton>
            </Form>
         </div>
      );
   }
}

UpdateAccountForm.propTypes = {
   user: PropTypes.object.isRequired,
   newUsername: PropTypes.string.isRequired,
   newEmail: PropTypes.string.isRequired,
   currentPassword: PropTypes.string.isRequired,
   newPassword: PropTypes.string.isRequired,
   confirmNewPassword: PropTypes.string.isRequired,
   accountUserNameError: PropTypes.bool.isRequired,
   accountUserNameErrorMessage: PropTypes.string,
   accountEmailError: PropTypes.bool.isRequired,
   accountEmailErrorMessage: PropTypes.string,
   accountPasswordError: PropTypes.bool.isRequired,
   accountPasswordErrorMessage: PropTypes.string,
   handleInputChange: PropTypes.func.isRequired,
   handleSubmitNewUserName: PropTypes.func.isRequired,
   handleSubmitNewEmail: PropTypes.func.isRequired,
   handleSubmitNewPassword: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   newUsername: state.accountReducer.newUsername,
   newEmail: state.accountReducer.newEmail,
   currentPassword: state.accountReducer.currentPassword,
   newPassword: state.accountReducer.newPassword,
   confirmNewPassword: state.accountReducer.confirmNewPassword,
   accountUserNameError: state.accountReducer.accountUserNameError,
   accountUserNameErrorMessage: state.accountReducer.accountUserNameErrorMessage,
   accountEmailError: state.accountReducer.accountEmailError,
   accountEmailErrorMessage: state.accountReducer.accountEmailErrorMessage,
   accountPasswordError: state.accountReducer.accountPasswordError,
   accountPasswordErrorMessage: state.accountReducer.accountPasswordErrorMessage
});

const mapDispatchToProps = (dispatch) => ({
   handleInputChange: (name, value) => dispatch(accountInputChange(name, value)),
   handleSubmitNewUserName: (e, userId, currentUsername, newUsername) => {
      e.preventDefault();
      dispatch(submitNewAccountUserName(userId, currentUsername, newUsername));
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccountForm);