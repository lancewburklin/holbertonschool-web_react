
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App.js'
import CourseList from '../CourseList/CourseList'
import CourseListRow from '../CourseList/CourseListRow.js'
import Login from '../Login/Login'


test('Testing if App renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that Notifications is made', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.Notifications')).not.toBe(null);
})

test('Testing that App-header is made', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header')).not.toBe(null);
})

test('Testing for App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body')).not.toBe(null);
})

test('Testing for App-footer', () => {
  const wrapper = shallow(<App />);
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
