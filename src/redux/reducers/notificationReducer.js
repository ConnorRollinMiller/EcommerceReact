import { NotificationActions } from '../actions';

const intialState = {
	notifications: []
}

export default (state = intialState, action) => {
	switch (action.type) {
		case NotificationActions.ADD_NOTIFICATION:
			return {
				...state,
				notifications: [ ...state.notifications, action.newNotification ]
			}
		case NotificationActions.REMOVE_NOTIFICATION:
			return {
				...state,
				notifications: state.notifications.filter(n => n.id !== action.notificationId)
			}
		default:
			return state;
	}
}