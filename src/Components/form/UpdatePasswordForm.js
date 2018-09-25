import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form-components/Form';
import Input from './form-components/Input';
import PrimaryButton from '../button/PrimaryButton';

class UpdatePasswordForm extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.user.userId !== this.props.user.userId) return true;
      if (nextProps.user.username !== this.props.user.username) return true;
      if (nextProps.user.email !== this.props.user.email) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.isPasswordChangeComplete !== this.props.isPasswordChangeComplete) return true;

      return false;

   }

   render() {
      return (
         <Form
            className=''
            onSubmit={ e => this.props.handleSubmitNewPassword(
               e,
               this.props.user.userId,
               this.currentPasswordRef.value,
               this.newPasswordRef.value,
               this.confirmNewPasswordRef.value
            ) }>
            <Input
               labelText='Current Password'
               type='password'
               name='currentPassword'
               placeholder='Current Password'
               forwardedRef={ ref => (this.currentPasswordRef = ref) }
            />
            <Input
               labelText='New Password'
               type='password'
               name='newPassword'
               placeholder='New Password'
               forwardedRef={ ref => (this.newPasswordRef = ref) }
            />
            <Input
               labelText='Confirm New Password'
               type='password'
               name='confirmNewPassword'
               placeholder='Confirm New Password'
               forwardedRef={ ref => (this.confirmNewPasswordRef = ref) }
            />
            <PrimaryButton className='col-12 mb-2'>
               Submit
            </PrimaryButton>
            {
               this.props.error &&
               <div className='text-center alert alert-danger'>
                  { this.props.errorMessage }
               </div>
            }
            {
               this.props.isPasswordChangeComplete &&
               <div className='text-center alert alert-success'>
                  Password Successfully Changed!
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
   handleSubmitNewPassword: PropTypes.func.isRequired
}

export default UpdatePasswordForm;