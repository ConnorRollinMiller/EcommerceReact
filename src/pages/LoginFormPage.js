import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/form/form-components/Form';
import PrimaryButton from '../components/button/PrimaryButton';
import InputWithIcon from '../components/form/form-components/InputWithIcon';
import UserIcon from '../components/icon/UserIcon';
import LockIcon from '../components/icon/LockIcon';
import PageTitle from '../components/common/PageTitle';
import LinkComponent from '../components/common/LinkComponent';
import { Redirect } from 'react-router-dom';
import './css/FormPage.css';

import { connect } from 'react-redux';
import { submitAccountLogin } from '../redux/actions/accountActions';

class LoginFormPage extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.user !== this.props.user) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;

      return false;

   }

   render() {
      if (this.props.user) return <Redirect to='/' />;

      return (
         <main>
            <PageTitle displayBreadcrumbs={ true } />
            <div className='main-section container d-flex align-items-center justify-content-center py-4'>
               <Form
                  className='col-12 col-md-10 col-lg-6 p-4'
                  onSubmit={ e =>
                     this.props.submitLogin(
                        e,
                        this.usernameRef.value,
                        this.passwordRef.value
                     )
                  }>
                  <h3 className='text-center mb-4 text-capitalize'>
                     Log in to your account
                  </h3>
                  {
                     this.props.error && (
                        <div className='alert alert-danger text-center text-capitalize'>
                           { this.props.errorMessage }
                        </div>
                     )
                  }
                  <InputWithIcon
                     type='text'
                     name='username'
                     placeholder='Username'
                     className='form-control-lg mb-4'
                     forwardedRef={ ref => this.usernameRef = ref }>
                     <UserIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>
                  <InputWithIcon
                     type='password'
                     name='password'
                     placeholder='Password'
                     className='form-control-lg mb-4'
                     forwardedRef={ ref => this.passwordRef = ref }>
                     <LockIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>

                  <PrimaryButton
                     fullWidth={ true }
                     largeButton={ true }>
                     Submit
                  </PrimaryButton>

                  <p className='text-center mt-4 mb-0' style={ { fontSize: '1.2em' } }>
                     New to ___?{ ' ' }
                     <LinkComponent to='/register' className='secondary-color'>
                        Sign Up
                     </LinkComponent>
                  </p>
               </Form>
            </div>
         </main>
      );
   }
}

LoginFormPage.propTypes = {
   user: PropTypes.object,
   errorMessage: PropTypes.string,
   error: PropTypes.bool.isRequired,
   submitLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   error: state.accountReducer.error,
   errorMessage: state.accountReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
   submitLogin: (e, username, password) => {
      e.preventDefault();
      dispatch(submitAccountLogin(username, password));
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginFormPage);
