import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notifcation extends Component {
   componentDidMount() {
      setTimeout(this.props.removeNotification, 3900);
   }

   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <div
            className={
               this.props.notification.alertGreen
                  ? 'notification alert alert-success text-center text-capitalize font-weight-bold'
                  : 'notification alert alert-danger text-center text-capitalize font-weight-bold'
            }
         >
            {this.props.notification.text}!
         </div>
      );
   }
}

Notifcation.propTypes = {
   notification: PropTypes.object.isRequired,
   removeNotification: PropTypes.func.isRequired
};

export default Notifcation;
