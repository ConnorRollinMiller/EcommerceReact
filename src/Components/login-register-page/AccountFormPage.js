import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../common/PageTitle';
import LoginForm from './LoginFormPage';
import RegisterForm from './RegisterFormPage';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
   accountInputChange,
   submitAccountLogin,
   submitAccountRegister,
   changeForm
} from '../../redux/actions/accountActions';

class AccountFormPage extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.isLoginForm !== this.props.isLoginForm) return true;
      if (nextProps.email !== this.props.email) return true;
      if (nextProps.username !== this.props.username) return true;
      if (nextProps.password !== this.props.password) return true;
      if (nextProps.confirmPassword !== this.props.confirmPassword) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      if (nextProps.user !== this.props.user) return true;
      return false;
   }

   render() {
      if (this.props.user) return <Redirect to='/' />;

      return (
         <main>
            <PageTitle displayBreadcrumbs={ true } />
            <div className='main-section container d-flex align-items-center justify-content-center p-4'>
               { this.props.isLoginForm ? (
                  <LoginForm
                     username={ this.props.username }
                     password={ this.props.password }
                     error={ this.props.error }
                     errorMessage={ this.props.errorMessage }
                     changeForm={ this.props.changeForm }
                     inputChange={ this.props.inputChange }
                     submitLogin={ this.props.submitLogin }
                  />
               ) : (
                     <RegisterForm
                        email={ this.props.email }
                        username={ this.props.username }
                        password={ this.props.password }
                        confirmPassword={ this.props.confirmPassword }
                        error={ this.props.error }
                        errorMessage={ this.props.errorMessage }
                        changeForm={ this.props.changeForm }
                        inputChange={ this.props.inputChange }
                        submitRegister={ this.props.submitRegister }
                     />
                  ) }
            </div>
         </main>
      );
   }
}

AccountFormPage.propTypes = {
   errorMessage: PropTypes.string,
   user: PropTypes.object,
   email: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   confirmPassword: PropTypes.string.isRequired,
   error: PropTypes.bool.isRequired,
   isLoginForm: PropTypes.bool.isRequired,
   inputChange: PropTypes.func.isRequired,
   submitLogin: PropTypes.func.isRequired,
   submitRegister: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
   user: state.accountReducer.user,
   email: state.accountReducer.email,
   username: state.accountReducer.username,
   password: state.accountReducer.password,
   confirmPassword: state.accountReducer.confirmPassword,
   error: state.accountReducer.error,
   errorMessage: state.accountReducer.errorMessage,
   isLoginForm: state.accountReducer.isLoginForm
});

const mapDispatchToProps = dispatch => ({
   inputChange: (name, value) => dispatch(accountInputChange(name, value)),
   submitLogin: (e, username, password) => {
      e.preventDefault();
      dispatch(submitAccountLogin(username, password));
   },
   submitRegister: (e, email, username, password, confirmPassword) => {
      e.preventDefault();
      dispatch(
         submitAccountRegister(email, username, password, confirmPassword)
      );
   },
   changeForm: e => {
      e.preventDefault();
      dispatch(changeForm());
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AccountFormPage);
