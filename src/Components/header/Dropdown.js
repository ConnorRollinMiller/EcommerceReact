import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../button/PrimaryButton';
import UpArrow from '../icon/UpArrow';
import DownArrow from '../icon/DownArrow';
import LinkComponent from '../common/LinkComponent';
import './css/Dropdown.css';

class Dropdown extends Component {

   state = {
      isOpen: false
   };

   shouldComponentUpdate(nextProps) {
      if (nextProps.user !== this.props.user) return true;
      if (nextProps.pathname !== this.props.pathname) return true;
      if (nextProps.isOpen !== this.state.isOpen) return true;
      return false;
   }

   componentDidUpdate(prevProps) {
      if (prevProps.pathname !== this.props.pathname) {
         this.setState({ isOpen: false });
      }
   }

   toggleMenu = () => {
      this.setState(prevState => ({
         isOpen: !prevState.isOpen
      }));
   };

   render() {
      return (
         <div className='dropdown' onClick={ this.toggleMenu }>
            <div className='nav-item'>
               <span className='nav-link text-nowrap'>
                  { this.props.navItemName }{ ' ' }
                  {
                     this.state.isOpen ?
                        <UpArrow size='1x' /> :
                        <DownArrow size='1x' />
                  }
               </span>
            </div>
            <ul className={ this.state.isOpen ? 'dropdown-menu text-center show' : 'dropdown-menu text-center' }>
               {
                  this.props.user ? (
                     <React.Fragment>
                        {
                           this.props.userMenuItems.map(item =>
                              <LinkComponent
                                 className='dropdown-item nav-link font-weight-bold text-capitalize py-2'
                                 key={ item.path }
                                 to={ `${ item.path }` }>
                                 { item.text }
                              </LinkComponent>
                           )
                        }
                        <div className='dropdown-divider' />
                        <PrimaryButton
                           className='dropdown-item col-10 text-center my-3 mx-auto'
                           onClick={ this.props.accountLogout }>
                           Sign Out
                        </PrimaryButton>
                     </React.Fragment>
                  ) : (
                        <React.Fragment>
                           { this.props.noUserMenuItems.map(item =>
                              <LinkComponent
                                 className='dropdown-item nav-link font-weight-bold text-capitalize py-2'
                                 key={ item.path }
                                 to={ `${ item.path }` }>
                                 { item.text }
                              </LinkComponent>
                           ) }
                        </React.Fragment>
                     )
               }
            </ul>
         </div>
      );
   }
}

Dropdown.propTypes = {
   menuItems: PropTypes.array,
   navItemName: PropTypes.string.isRequired,
   accountLogout: PropTypes.func.isRequired
};

export default Dropdown;