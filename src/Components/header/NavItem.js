import React from 'react';
import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';

const NavItem = ({ ...props }) => (
   <div className='nav-item'>
      <LinkComponent
         className='nav-link'
         to={ props.to }
      >
         { props.children }
      </LinkComponent>
   </div>
);

NavItem.propTypes = {
   children: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
   activeClassName: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired
};

export default NavItem;
