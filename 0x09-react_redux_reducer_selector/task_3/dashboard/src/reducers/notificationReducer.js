import { NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes'

export const initialState = {
  notifications: [],
  filter: ''
}

export function notificationReducer(state = initialState, action) {
  if (!action) {
    return initialState;
  }
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        filter: NotificationTypeFilters[0],
        notifications: action.data.map(function(element) {
          return {
            ...element,
            isRead: false
          }
        })
      }
    }
    case MARK_AS_READ: {
      return {
        ...state,
        filter: NotificationTypeFilters[0],
        notifications: action.notifications.map(function(element) {
          if (element.id == action.index) {
            return {
              ...element,
              isRead: true
            }
          } else {
            return {...element};
          }
        })
      }
    }
    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter
      }
    }
    default:
      return state
  }
}
