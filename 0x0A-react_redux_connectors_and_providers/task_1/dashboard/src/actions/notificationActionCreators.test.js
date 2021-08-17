import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes'
import { markAsAread, setNotificationFilter } from './notificationActionCreators'

describe('Notification Actions', () => {
  it('Mark As Read', () => {
    const isRead = markAsAread(1);
    expect(isRead).toEqual({
      type: MARK_AS_READ,
      index: 1
    })
  })
  it('Setting the filter', () => {
    const setFilter = setNotificationFilter(NotificationTypeFilters[0]);
    expect(setFilter).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    })
  })
})
