
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

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test('Testing if App renders', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that Notifications is made', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.Notifications')).not.toBe(null);
})

test('Testing that App-header is made', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.App-header')).not.toBe(null);
})

test('Testing for App-body', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.App-body')).not.toBe(null);
})

test('Testing for App-footer', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.App-footer')).not.toBe(null);
})

test('Testing that CourseList is not displayed', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(CourseListRow)).toHaveLength(0);
})

test('Testing for CourseList', () => {
  const wrapper = shallow(<App isLoggedIn={true}/>)
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(CourseList)).toHaveLength(1);
})

test('Testing the logout', () => {
  window.alert = jest.fn();
  const map = {};
  window.addEventListener = jest.fn().mockImplementation((event, cb) => {
    map[event] = cb;
  });
  const myObj = {
    logOut: jest.fn()
  }
  const wrapper = mount(<App {...myObj}/>);
  var event = new KeyboardEvent('keydown', {ctrlKey: true, 'keyCode': 72});
  document.dispatchEvent(event);
  expect(myObj.logOut).toHaveBeenCalled();
  expect(window.alert).toBeCalledWith('Logging you out');
  window.alert.mockRestore();
})

test('Testing the displayDrawer', () => {
  const wrapper = mount(<App />).instance();
  expect(wrapper.state.displayDrawer).toBe(false);
  wrapper.handleDisplayDrawer();
  expect(wrapper.state.displayDrawer).toBe(true);
  wrapper.handleHideDrawer();
  expect(wrapper.state.displayDrawer).toBe(false);
})
