/**
 * @jest-environment jsdom
 */

import Header from './Header'
import React from 'react'
import { render, shallow, mount } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite';
import {  AppContext, defUser } from '../App/AppContext'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test('Testing for Header crash', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing for img and h1 tag', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img')).not.toBe(null);
  expect(wrapper.find('h1')).not.toBe(null);
})

test('Testing header with context', () => {
  const logOut = jest.fn();
  const newUser = defUser;
  newUser.email = "Cheese";
  newUser.password = "Cheese"
  const wrapper = mount(<AppContext.Provider value={{user: newUser, logOut: logOut}}><Header />)(</AppContext.Provider>)
  expect(wrapper.find('.LogoutSection')).toHaveLength(0);
})

test('Testing header is logged in', () => {
  const logOut = jest.fn();
  const newUser = defUser;
  newUser.email = "Cheese";
  newUser.password = "Cheese"
  newUser.isLoggedIn = true;
  const wrapper = mount(<AppContext.Provider value={{user: newUser, logOut: logOut}}><Header />)(</AppContext.Provider>)
  expect(wrapper.find('.LogoutSection')).toHaveLength(1);
  wrapper.find('a').simulate('click');
  expect(logOut).toHaveBeenCalled();
})
