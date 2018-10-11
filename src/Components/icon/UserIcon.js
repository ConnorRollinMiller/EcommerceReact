import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class UserIcon extends Component {

   shouldComponentUpdate() {
      return false;
   }

   render() {
      return (
         <FontAwesomeIcon
            className={ this.props.className }
            icon={ [ 'fas', 'user' ] }
            size={ this.props.size }
         />
      );
   }
}

UserIcon.propTypes = {
   size: PropTypes.string.isRequired,
   className: PropTypes.string,
}

UserIcon.defaultProps = {
   size: '1x'
}

export default UserIcon;