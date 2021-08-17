/**
 * @jest-environment jsdom
 */

import Footer from './Footer'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite';
import { defUser, AppContext } from '../App/AppContext'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Testing for Footer crash', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing for Copyright', () => {
  const tempUser = defUser;
  tempUser.isLoggedIn = true;
  const logOut = jest.fn();
  const wrapper = mount(<AppContext.Provider value={{user: tempUser, logOut: logOut}}><Footer /></AppContext.Provider>);
  expect(wrapper.text().includes('Copyright')).toBe(true);
})

test('Testing for Contact Us', () => {
  const tempUser = defUser;
  tempUser.isLoggedIn = true;
  const logOut = jest.fn();
  const wrapper = mount(<AppContext.Provider value={{user: tempUser, logOut: logOut}}><Footer /></AppContext.Provider>);
  expect(wrapper.text().includes('Contact us')).toBe(true);
})

test('Testing for Contact Us Logged out', () => {
  const tempUser = defUser;
  tempUser.isLoggedIn = false;
  const logOut = jest.fn();
  const wrapper = mount(<AppContext.Provider value={{user: tempUser, logOut: logOut}}><Footer /></AppContext.Provider>);
  expect(wrapper.text().includes('Contact us')).toBe(false);
})
