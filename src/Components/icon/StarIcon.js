import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class StarIcon extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }
   render() {
      return (
         <FontAwesomeIcon
            className={this.props.className}
            icon={['fas', 'star']}
            size={this.props.size}
            onClick={this.props.onClick}
         />
      );
   }
}

StarIcon.propTypes = {
   onClick: PropTypes.func,
   className: PropTypes.string,
   size: PropTypes.string
};

export default StarIcon;
