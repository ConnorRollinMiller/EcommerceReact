import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifcation from './Notifcation';
import './css/NotficationList.css';

import { connect } from 'react-redux';
import { removeNotification } from '../../redux/actions/notificationActions';

class NotificationsList extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.notifications !== this.props.notifications) {
         return true;
      }
      return true;
   }

   render() {
      return (
         <div className='notifications-list col-10 col-md-4'>
            { this.props.notifications.map(n => (
               <Notifcation
                  key={ n.id }
                  notification={ n }
                  removeNotification={ () => this.props.removeNotification(n.id) }
               />
            )) }
         </div>
      );
   }
}

NotificationsList.propTypes = {
   notifications: PropTypes.array.isRequired,
   removeNotification: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   notifications: state.notificationReducer.notifications
});

const mapDispatchToProps = dispatch => ({
   removeNotification: id => dispatch(removeNotification(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NotificationsList);
