import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import LinkComponent from '../common/LinkComponent';
import Dropdown from './Dropdown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/Menu.css';

// const noUserMenuItems = [ { text: 'Login', path: '/login' }, { text: 'Register', path: '/register' } ];

class Menu extends Component {

   state = {
      isOpen: false
   }

   shouldComponentUpdate(nextProps, nextState) {

      if (nextProps.user !== this.props.user) return true;
      if (nextProps.pathname !== this.props.pathname) return true;
      if (nextState.isOpen !== this.state.isOpen) return true;

      return false;

   }

   componentDidUpdate(prevProps) {
      if (prevProps.pathname !== this.props.pathname) {
         this.setState({ isOpen: false });
      }
   }

   toggleMenu = () => {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
   }

   render() {
      return (
         <div className='container navbar navbar-expand-md'>
            <LinkComponent to='/' className='navbar-brand mr-4'>
               <h1 className='mb-0'>Site Logo</h1>
            </LinkComponent>
            <button className='navbar-toggler' onClick={ this.toggleMenu }>
               <FontAwesomeIcon
                  className='navbar-toggler-icon'
                  icon={ [ 'fas', 'bars' ] }
                  style={ { fontSize: '1.6em' } }
               />
            </button>

            <nav className={ this.state.isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse' }>
               <NavItem to='/shop'>
                  Shop
               </NavItem>
               <NavItem to='/checkout'>
                  Checkout
               </NavItem>
               {
                  this.props.user ? (
                     <Dropdown
                        navItemName='Account'
                        user={ this.props.user }
                        accountLogout={ this.props.accountLogout }
                        pathname={ this.props.pathname }
                     />
                  ) : (
                        <React.Fragment>
                           <NavItem to='/login'>
                              Login
                           </NavItem>
                           <NavItem to='/register'>
                              Register
                           </NavItem>
                        </React.Fragment>
                     )
               }
               <div className='navbar-nav ml-auto'>
                  <div className='nav-seperator mr-2' />
                  <ShoppingCart pathname={ this.props.pathname } />
               </div>
            </nav>
         </div>
      )
   }
}
Menu.propTypes = {
   user: PropTypes.object,
   accountLogout: PropTypes.func.isRequired
};

export default Menu;
