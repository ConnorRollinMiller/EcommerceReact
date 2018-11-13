import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class LinkComponent extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) return true;
      return false;
   }

   render() {
      return (
         <Link
            className={ `${ this.props.className }` }
            to={ this.props.to }
            replace={ this.props.to === this.props.location.pathname }>
            { this.props.children }
         </Link>
      );
   }
}

LinkComponent.propTypes = {
   className: PropTypes.string,
   to: PropTypes.string.isRequired
}

LinkComponent.defaultProps = {
   className: '',
}

export default withRouter(LinkComponent);