import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class EmailIcon extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <FontAwesomeIcon
            className={this.props.className}
            icon={['fas', 'envelope']}
            size={this.props.size}
            onClick={this.props.onClick}
         />
      );
   }
}

EmailIcon.propTypes = {
   className: PropTypes.string,
   size: PropTypes.string,
   onClick: PropTypes.func
};

EmailIcon.defaultProps = {
   size: '1x'
};

export default EmailIcon;
