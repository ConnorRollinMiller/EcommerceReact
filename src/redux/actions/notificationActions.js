import { NotificationActions } from './index';
import { NotificationCodes } from '../../constants';

let notificationId = 0;

export const addNotification = (code) => {
   switch (code) {
      case NotificationCodes.ADD_TO_CART:
         return addToCartNotification();
      case NotificationCodes.REMOVE_FROM_CART:
         return removeFromCartNotification();
      default:
         return errorNotification();
   }
};

const addToCartNotification = () => ({
   type: NotificationActions.ADD_NOTIFICATION,
   newNotification: { id: notificationId++, alertGreen: true, text: 'Item Added To Cart' }
})

const removeFromCartNotification = () => ({
   type: NotificationActions.ADD_NOTIFICATION,
   newNotification: { id: notificationId++, alertGreen: false, text: 'Item Removed From Cart' }
});

const errorNotification = () => ({
   type: NotificationActions.ERROR_NOTIFICATION,
   newNotification: { id: notificationId.id++, alertGreen: false, text: 'Error With Notifications' }
});

export const removeNotification = (notificationId) => ({
   type: NotificationActions.REMOVE_NOTIFICATION,
   notificationId
});