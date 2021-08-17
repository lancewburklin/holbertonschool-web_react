import { initialState, uiReducer } from './uiReducer'
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes'
import { DISPLAY_COURSE } from '../actions/uiActionTypes'
import { Map } from 'immutable'

describe('uiReducer', () => {
  it('Initial state', () => {
    const state = uiReducer();
    expect(state).toEqual(initialState);
  })
  it('Default switch case', () => {
    const state = uiReducer(DISPLAY_COURSE);
    expect(state).toEqual(initialState);
  })
  it('Display drawer', () => {
    const state = uiReducer(DISPLAY_NOTIFICATION_DRAWER);
    console.log(state);
    expect(state.get('isNotificationDrawerVisible')).toEqual(false);
  })
})
