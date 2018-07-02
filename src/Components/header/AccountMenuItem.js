import React from 'react';
import PropTypes from 'prop-types';
import DownArrow from '../icon/DownArrow';
import PrimaryButton from '../button/PrimaryButton';
import './css/AccountMenuItem.css';

import { connect } from 'react-redux';
import { deleteToken } from '../../utilities/localStorage';
import { accountLogout } from '../../redux/actions/accountActions';

const AccountMenuItem = ({ ...props }) => (
   <div className="nav-link" id="account-nav-menu">
      My Account <DownArrow className="ml-1" size="lg" />
      <span className="account-nav-menu-hover-container p-4 rounded bg-white">
         <PrimaryButton onClick={() => props.accountLogout()}>
            Log Out
         </PrimaryButton>
      </span>
   </div>
);

AccountMenuItem.propTypes = {
   accountLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   accountLogout: () => {
      deleteToken();
      dispatch(accountLogout());
   }
});

export default connect(
   null,
   mapDispatchToProps
)(AccountMenuItem);
