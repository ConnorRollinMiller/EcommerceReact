import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import InputWithButton from '../form/InputWithButton';
import CheckmarkIcon from '../icon/CheckmarkIcon';

class UpdateUsernameForm extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.user.userId !== this.props.user.userId) return true;
      if (nextProps.user.username !== this.props.user.username) return true;
      if (nextProps.user.email !== this.props.user.email) return true;
      if (nextProps.newUsername !== this.props.newUsername) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.isUsernameChangeComplete !== this.props.isUsernameChangeComplete) return true;
      return false
   }

   render() {
      return (
         <Form
            className='mt-4'
            onSubmit={ e =>
               this.props.handleSubmitNewUsername(
                  e,
                  this.props.user.userId,
                  this.props.user.username,
                  this.props.newUsername
               )
            }>
            <InputWithButton
               labelText='Username'
               placeholder='Username'
               type='text'
               name='newUsername'
               value={ this.props.newUsername }
               disabled={ this.props.isUsernameChangeComplete }
               buttonText={
                  this.props.isUsernameChangeComplete ?
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

UpdateUsernameForm.propTypes = {
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   newUsername: PropTypes.string.isRequired,
   handleInputChange: PropTypes.func.isRequired,
   handleSubmitNewUsername: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   isUsernameChangeComplete: PropTypes.bool.isRequired
}

export default UpdateUsernameForm;