import { NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes'
import { notificationReducer, initialState } from './notificationReducer'

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
    expect(state).toEqual(expected);
  })
  it('Mark as read', () => {
    action['index'] = 2;
    action.notifications = expected.notifications;
    action.type = MARK_AS_READ;
    expected.notifications[1].isRead = true;
    const state = notificationReducer(initialState, action)
    expect(state.notifications[1].isRead).toEqual(true)
  })
  it('Set type filter', () => {
    action.type = SET_TYPE_FILTER;
    action.filter = NotificationTypeFilters[1]
    const state = notificationReducer(initialState, action);
    expect(state.filter).toEqual(NotificationTypeFilters[1]);
  })
})
