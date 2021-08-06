import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes'

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

export function uiReducer(state = initialState, action) {
  console.log('In the function')
  if (action == null) {
    return state;
  }
  switch (action) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      console.log('In the case')
      return {
        ...state,
        isNotificationDrawerVisible: true
      }
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return {
        ...state,
        isNotificationDrawerVisible: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isUserLoggedIn: true
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isUserLoggedIn: false
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isUserLoggedIn: false
      }
    }
    default:
      return state
  }
  return "FAIL"
}
