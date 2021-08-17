import { NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes'
import { notificationsNormalizer } from '../schema/notifications'
import { Map } from 'immutable'

export const initialState = Map({
  notifications: [],
  filter: ''
})

export function notificationReducer(state = initialState, action) {
  if (!action) {
    return initialState;
  }
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      let allData = state;
      allData = allData.set('filter', NotificationTypeFilters[0]);
      allData = allData.set('notifications', action.data.map(function (element) {
        return {
          ...element,
          isRead: false
        }
      }))
      allData = allData.set('notifications', notificationsNormalizer(allData.get('notifications')))
      return (allData);
    }
    case MARK_AS_READ: {
      return (state.setIn(['notifications', 'entities', 'notifications', String(action.index), 'isRead'], true))
    }
    case SET_TYPE_FILTER: {
      return (state.set('filter', action.filter))
    }
    default:
      return state
  }
}
