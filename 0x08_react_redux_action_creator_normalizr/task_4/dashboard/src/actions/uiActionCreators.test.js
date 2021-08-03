import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js'
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators'

describe('ui Action creators', () => {
  it('login', () => {
    const logit = login('pineapples', 'pineapples');
    expect(logit).toEqual(
      {
        type: LOGIN,
        user: {
          email: 'pineapples',
          password: 'pineapples'
        }
      }
    )
  })
  it('logout', () => {
    const thing = logout();
    expect(thing).toEqual({ type: LOGOUT });
  })
  it('Display notifications', () => {
    const thing = displayNotificationDrawer();
    expect(thing).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  })
  it('Hide notifications', () => {
    const thing = hideNotificationDrawer();
    expect(thing).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  })
})
