import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));
