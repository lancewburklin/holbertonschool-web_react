import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector'
import { Map } from 'immutable'
import { notificationsNormalizer } from '../schema/notifications'
import { notificationReducer, initialState } from '../reducers/notificationReducer'
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes'

describe("selectors", () => {
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
  const state = notificationReducer(initialState, action);
  it('filterTypeSelected', () => {
    const FilterType = filterTypeSelected(state);
    expect(FilterType).toEqual("DEFAULT")
  })
  it('Get notifications', () => {
    const allNOtifications = getNotifications(state);
    expect(allNOtifications.toJS()).toEqual(notificationsNormalizer(expected.notifications).entities.notifications)
  })
  it('Get unreads', () => {
    const markRead = {
      type: MARK_AS_READ,
      index: 2
    }
    const notesExpec = notificationReducer(state, markRead);
    expected.notifications = expected.notifications.filter((item) => {
      if (item.id != 2) {
        return {...item}
      }
    })
  })
  const unread = getUnreadNotifications(state);
  expect(unread.toJS()).toEqual(notificationsNormalizer(expected.notifications).entities.notifications)
})
