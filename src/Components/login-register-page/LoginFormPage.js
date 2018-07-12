import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import PrimaryButton from '../button/PrimaryButton';
import InputWithIcon from '../form/InputWithIcon';
import UserIcon from '../icon/UserIcon';
import LockIcon from '../icon/LockIcon';
import PageTitle from '../common/PageTitle';
import LinkComponent from '../common/LinkComponent';
import { Redirect } from 'react-router-dom';
import './css/FormPage.css';

import { connect } from 'react-redux';
import {
   accountInputChange,
   submitAccountLogin,
   resetAccountInputs
} from '../../redux/actions/accountActions';

class LoginFormPage extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.username !== this.props.username) return true;
      if (nextProps.password !== this.props.password) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.user !== this.props.user) return true;
      return false;
   }

   componentWillUnmount() {
      this.props.resetAccountInputs();
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
                        this.props.username,
                        this.props.password
                     ) }>
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
                     value={ this.props.username }
                     placeholder='Username'
                     className='form-control-lg mb-4'
                     onChange={ e => this.props.inputChange(e.target.name, e.target.value) }>
                     <UserIcon className='form-input-with-icon-icon' />
                  </InputWithIcon>
                  <InputWithIcon
                     type='password'
                     name='password'
                     value={ this.props.password }
                     placeholder='Password'
                     className='form-control-lg mb-4'
                     onChange={ e => this.props.inputChange(e.target.name, e.target.value) }>
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
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   inputChange: PropTypes.func.isRequired,
   submitLogin: PropTypes.func.isRequired,
   resetAccountInputs: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   username: state.accountReducer.username,
   password: state.accountReducer.password,
   error: state.accountReducer.error,
   errorMessage: state.accountReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
   inputChange: (name, value) => dispatch(accountInputChange(name, value)),
   submitLogin: (e, username, password) => {
      e.preventDefault();
      dispatch(submitAccountLogin(username, password));
   },
   resetAccountInputs: () => dispatch(resetAccountInputs())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginFormPage);
