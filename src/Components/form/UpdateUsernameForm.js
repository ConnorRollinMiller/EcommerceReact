import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form-components/Form';
import InputWithButton from './form-components/InputWithButton';

class UpdateUsernameForm extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user.userId !== this.props.user.userId) return true;
      if (nextProps.user.username !== this.props.user.username) return true;
      if (nextProps.user.email !== this.props.user.email) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.isUsernameChangeComplete !== this.props.isUsernameChangeComplete) return true;
      return false
   }

   render() {
      return (
         <Form
            className='my-4'
            onSubmit={ e =>
               this.props.handleSubmitNewUsername(
                  e,
                  this.props.user.userId,
                  this.props.user.username,
                  this.newUsernameRef.value
               )
            }>
            <InputWithButton
               labelText='Username'
               placeholder='Username'
               type='text'
               name='newUsername'
               buttonText='Submit'
               defaultValue={ this.props.user.username }
               forwardedRef={ ref => this.newUsernameRef = ref }
            />
            {
               this.props.error &&
               <div className='text-center alert alert-danger'>
                  { this.props.errorMessage }
               </div>
            }
            {
               this.props.isUsernameChangeComplete &&
               <div className='text-center alert alert-success'>
                  Username Successfully Changed!
               </div>
            }
         </Form>
      );
   }
}

UpdateUsernameForm.propTypes = {
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   handleSubmitNewUsername: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   isUsernameChangeComplete: PropTypes.bool.isRequired
}

export default UpdateUsernameForm;