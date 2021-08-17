import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes.js'
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginFailure, loginSuccess, loginRequest } from './uiActionCreators'
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";

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
  it('API returns response', () => {
    jest.mock("node-fetch", () => require("fetch-mock").sandbox());
    const fetchMock = require('node-fetch')
    fetchMock.get('/login-success.json', 200)
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(loginRequest('pineapples', 'pineapples')).then(() => {
      const actions = store.getActions();
      const expectedPayload = [{type: LOGIN_SUCCESS, type: LOGIN}];
      expect(actions).toEqual(expect.arrayContaining(expectedPayload));
    })
  })
  it('API return fail', () => {
    jest.mock("node-fetch", () => require("fetch-mock").sandbox());
    const fetchMock = require('node-fetch')
    fetchMock.get('/login-success.json', {throws: new TypeError('FAILED')}, {overwriteRoutes: true})
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(loginRequest('pineapples', 'pineapples')).then(() => {
      const actions = store.getActions();
      const expectedPayload = [{type: LOGIN_FAILURE, type: LOGIN}];
      expect(actions).toEqual(expect.arrayContaining(expectedPayload));
    })
  })
})
