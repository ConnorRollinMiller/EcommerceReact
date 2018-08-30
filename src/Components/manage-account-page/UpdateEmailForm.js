import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import InputWithButton from '../form/InputWithButton';
import CheckmarkIcon from '../icon/CheckmarkIcon';


class UpdateEmailForm extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user.UserId !== this.props.user.UserId) return true;
      if (nextProps.user.UserName !== this.props.user.UserName) return true;
      if (nextProps.user.Email !== this.props.user.Email) return true;
      if (nextProps.newEmail !== this.props.newEmail) return true;
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
               this.props.newEmail
            ) }>
            <InputWithButton
               labelText='Email'
               placeholder='Email'
               type='text'
               name='newEmail'
               disabled={ this.props.isEmailChangeComplete }
               value={ this.props.newEmail }
               buttonText={
                  this.props.isEmailChangeComplete ?
                     <CheckmarkIcon className='text-white' /> :
                     'Submit'
               }
               onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
            />
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

UpdateEmailForm.propTypes = {
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   newEmail: PropTypes.string.isRequired,
   handleInputChange: PropTypes.func.isRequired,
   isEmailChangeComplete: PropTypes.bool.isRequired
}

export default UpdateEmailForm;