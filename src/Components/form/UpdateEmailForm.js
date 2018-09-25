import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form-components/Form';
import InputWithButton from './form-components/InputWithButton';

class UpdateEmailForm extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.user.userId !== this.props.user.userId) return true;
      if (nextProps.user.userName !== this.props.user.userName) return true;
      if (nextProps.user.email !== this.props.user.email) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.isEmailChangeComplete !== this.props.isEmailChangeComplete) return true;

      return false;
   }

   render() {
      return (
         <Form
            className='mb-4'
            onSubmit={ e => this.props.handleSubmitNewEmail(
               e,
               this.props.user.userId,
               this.props.user.email,
               this.newEmailRef.value
            ) }>
            <InputWithButton
               labelText='Email'
               placeholder='Email'
               type='text'
               name='newEmail'
               defaultValue={ this.props.user.email }
               buttonText='Submit'
               forwardedRef={ ref => this.newEmailRef = ref }
            />
            {
               this.props.error &&
               <div className='text-center alert alert-danger'>
                  { this.props.errorMessage }
               </div>
            }
            {
               this.props.isEmailChangeComplete &&
               <div className='text-center alert alert-success'>
                  Email Successfully Changed!
               </div>
            }
         </Form>
      );
   }
}

UpdateEmailForm.propTypes = {
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   isEmailChangeComplete: PropTypes.bool.isRequired
}

export default UpdateEmailForm;