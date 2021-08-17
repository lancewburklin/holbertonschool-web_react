import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes'
import { Map } from 'immutable'

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
})

export function uiReducer(state = initialState, action) {
  if (action == null) {
    return initialState
  }
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true)
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false)
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true)
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false)
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false)
    }
    default:
      return initialState;
  }
}
