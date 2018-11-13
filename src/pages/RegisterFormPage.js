import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/form/form-components/Form';
import PrimaryButton from '../components/button/PrimaryButton';
import InputWithIcon from '../components/form/form-components/InputWithIcon';
import EmailIcon from '../components/icon/EmailIcon';
import UserIcon from '../components/icon/UserIcon';
import LockIcon from '../components/icon/LockIcon';
import PageTitle from '../components/common/PageTitle';
import LinkComponent from '../components/common/LinkComponent';
import { Redirect } from 'react-router-dom';
import './css/FormPage.css';

import { connect } from 'react-redux';
import { submitAccountRegister } from '../redux/actions/accountActions';

class RegisterFormPage extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.user !== this.props.user) return true;

      return false;
   }

   render() {
      if (this.props.user) return <Redirect to='/' />;

      return (
         <React.Fragment>
            <PageTitle displayBreadcrumbs={ true } />
            <div className='main-section container d-flex align-items-center justify-content-center py-4'>
               <Form
                  className='col-12 col-md-10 col-lg-6 p-4'
                  onSubmit={ e => {
                     this.props.submitRegister(
                        e,
                        this.emailRef.value,
                        this.usernameRef.value,
                        this.passwordRef.value,
                        this.confirmPasswordRef.value
                     )
                  }
                  }>
                  <h3 className='text-center mb-4 text-capitalize'>
                     Make your account
                  </h3>
                  {
                     this.props.error && (
                        <div className='alert alert-danger text-center text-capitalize'>
                           { this.props.errorMessage }
                        </div>
                     )
                  }
                  <InputWithIcon
                     type='email'
                     name='email'
                     placeholder='Email'
                     className='form-control-lg mb-4'
                     forwardedRef={ ref => this.emailRef = ref }>
                     <EmailIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>
                  <InputWithIcon
                     iconName={ [ 'fa', 'user' ] }
                     type='text'
                     name='username'
                     placeholder='Username'
                     className='form-control-lg mb-4'
                     forwardedRef={ ref => this.usernameRef = ref }>
                     <UserIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>
                  <InputWithIcon
                     iconName={ [ 'fas', 'lock' ] }
                     type='password'
                     name='password'
                     placeholder='Password'
                     className='form-control-lg mb-4'
                     forwardedRef={ ref => this.passwordRef = ref }>
                     <LockIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>
                  <InputWithIcon
                     iconName={ [ 'fas', 'check-square' ] }
                     type='password'
                     name='confirmPassword'
                     placeholder='Confirm Password'
                     className='form-control-lg mb-4'
                     forwardedRef={ ref => this.confirmPasswordRef = ref }>
                     <LockIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>

                  <PrimaryButton
                     fullWidth={ true }
                     largeButton={ true }>
                     Submit
                  </PrimaryButton>

                  <p className='text-center mt-4 mb-0' style={ { fontSize: '1.2em' } }>
                     Already have an account?{ ' ' }
                     <LinkComponent to='/login' className='secondary-color'>
                        Sign In
                     </LinkComponent>
                  </p>
               </Form>
            </div>
         </React.Fragment>
      );
   }
}

RegisterFormPage.propTypes = {
   user: PropTypes.object,
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   submitRegister: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   error: state.accountReducer.error,
   errorMessage: state.accountReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
   submitRegister: (e, email, username, password, confirmPassword) => {
      e.preventDefault();
      dispatch(submitAccountRegister(email, username, password, confirmPassword));
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RegisterFormPage);
