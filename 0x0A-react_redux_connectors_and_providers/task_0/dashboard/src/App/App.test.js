
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, shallow, mount } from 'enzyme'
import App from './App.js'
import CourseList from '../CourseList/CourseList'
import CourseListRow from '../CourseList/CourseListRow.js'
import Login from '../Login/Login'
import { StyleSheetTestUtils } from 'aphrodite';
import { defUser, AppContext } from './AppContext'
import { mapStateToProps } from './App'
import { fromJS } from 'immutable'
import { createStore } from 'redux'
import { uiReducer } from '../reducers/uiReducer.js'

const store = createStore(uiReducer)

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test('Testing if App renders', () => {
  const wrapper = render(<App store={store}/>);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that Notifications is made', () => {
  const wrapper = render(<App store={store}/>);
  expect(wrapper.find('.Notifications')).not.toBe(null);
})

test('Testing that App-header is made', () => {
  const wrapper = render(<App store={store}/>);
  expect(wrapper.find('.App-header')).not.toBe(null);
})

test('Testing for App-body', () => {
  const wrapper = render(<App store={store}/>);
  expect(wrapper.find('.App-body')).not.toBe(null);
})

test('Testing for App-footer', () => {
  const wrapper = render(<App store={store}/>);
  expect(wrapper.find('.App-footer')).not.toBe(null);
})

test('Testing that CourseList is not displayed', () => {
  const wrapper = shallow(<App store={store}/>)
  expect(wrapper.find(CourseListRow)).toHaveLength(0);
})

test('mapStateToProps', () => {
  let state = fromJS({
    isUserLoggedIn: true
  });
  state = mapStateToProps(state);
  expect(state).toEqual({ isLoggedIn: true, displayDrawer: undefined })
})
