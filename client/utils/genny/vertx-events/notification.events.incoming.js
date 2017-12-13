import { NOTIFICATION as NOTIFICATION_DATA } from 'client/constants';

export const Notification = message => ({
  type: NOTIFICATION_DATA,
  payload: message,
});

export default {
  Notification,
};
