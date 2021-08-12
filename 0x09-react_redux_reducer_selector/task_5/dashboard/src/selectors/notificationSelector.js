import { Map } from 'immutable'

export function filterTypeSelected(state) {
  return (state.get('filter'));
}

export function getNotifications(state) {
  return (Map(state.getIn(['notifications', 'entities', 'notifications'])));
}

export function getUnreadNotifications(state) {
  const allNotifications = state.getIn(['notifications', 'entities', 'notifications']);
  let unread = {};
  for (let i in allNotifications) {
    if (allNotifications[i].isRead == false) {
      unread[i] = allNotifications[i]
    }
  }
  return Map(unread)
}
