import { NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes'
import { notificationReducer, initialState } from './notificationReducer'
import { Map, fromJS } from 'immutable'
import { notificationsNormalizer } from '../schema/notifications'

describe('Notification reducer', () => {
  let action = {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  }

  let expected = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  }

  it('Initial state', () => {
    const state = notificationReducer();
    expect(state).toEqual(initialState);
  })
  it('Fetch notifications', () => {
    const state = notificationReducer(initialState, action);
    let temp = {...expected};
    temp.notifications = notificationsNormalizer(temp.notifications);
    expect(state.toJS()).toEqual(temp);
  })
  it('Mark as read', () => {
    const markRead = {
      type: MARK_AS_READ,
      index: 2
    }
    const state = notificationReducer(initialState, action)
    expected.notifications[1].isRead = true;
    const newState = notificationReducer(state, markRead)
    expect(newState.toJS().notifications.entities.notifications['2'].isRead).toEqual(true)
  })
  it('Set type filter', () => {
    const setType = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    }
    const state = notificationReducer(initialState, action);
    const newState = notificationReducer(state, setType);
    expect(newState.get('filter')).toEqual(setType.filter)
  })
})
