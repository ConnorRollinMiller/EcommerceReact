import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Input from '../form/Input';
import PrimaryButton from '../button/PrimaryButton';
import CheckmarkIcon from '../icon/CheckmarkIcon';

class UpdatePasswordForm extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user.userId !== this.props.user.userId) return true;
      if (nextProps.user.username !== this.props.user.username) return true;
      if (nextProps.user.email !== this.props.user.email) return true;
      if (nextProps.currentPassword !== this.props.currentPassword) return true;
      if (nextProps.newPassword !== this.props.newPassword) return true;
      if (nextProps.confirmNewPassword !== this.props.confirmNewPassword) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.isPasswordChangeComplete !== this.props.isPasswordChangeComplete) return true;
      return false;
   }

   render() {
      return (
         <Form
            className='mb-4'
            onSubmit={ e => this.props.handleSubmitNewPassword(
               e,
               this.props.user.userId,
               this.props.currentPassword,
               this.props.newPassword,
               this.props.confirmNewPassword
            ) }>
            <Input
               labelText='Current Password'
               type='password'
               name='currentPassword'
               placeholder='Current Password'
               value={ this.props.currentPassword }
               disabled={ this.props.isPasswordChangeComplete }
               onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
            />
            <Input
               labelText='New Password'
               type='password'
               name='newPassword'
               placeholder='Password'
               value={ this.props.newPassword }
               disabled={ this.props.isPasswordChangeComplete }
               onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
            />
            <Input
               labelText='Confirm Password'
               type='password'
               name='confirmNewPassword'
               placeholder='Confirm Password'
               value={ this.props.confirmNewPassword }
               disabled={ this.props.isPasswordChangeComplete }
               onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
            />
            <PrimaryButton className='mb-2'>
               {
                  this.props.isPasswordChangeComplete ?
                     <CheckmarkIcon className='text-white' /> :
                     'Submit'
               }
            </PrimaryButton>
            {
               this.props.error &&
               <div className='alert alert-danger'>
                  { this.props.errorMessage }
               </div>
            }
         </Form>
      );
   }
}

UpdatePasswordForm.propTypes = {
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   user: PropTypes.object.isRequired,
   currentPassword: PropTypes.string.isRequired,
   newPassword: PropTypes.string.isRequired,
   confirmNewPassword: PropTypes.string.isRequired,
   isPasswordChangeComplete: PropTypes.bool.isRequired
}

export default UpdatePasswordForm;