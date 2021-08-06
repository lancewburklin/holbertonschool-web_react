import { initialState, uiReducer } from './uiReducer'
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes'
import { DISPLAY_COURSE } from '../actions/uiActionTypes'

describe('uiReducer', () => {
  it('Initial state', () => {
    const state = uiReducer();
    expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
      });
  })
  it('Default switch case', () => {
    const state = uiReducer(DISPLAY_COURSE);
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    })
  })
  it('Display drawer', () => {
    const state = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
    console.log(state);
    expect(state.isNotificationDrawerVisible).toEqual(true);
  })
})
