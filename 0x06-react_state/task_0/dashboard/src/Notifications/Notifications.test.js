/**
 * @jest-environment jsdom
 */

import Notifications from './Notifications'
import React from 'react'
import { mount, render, shallow } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Testing for a crash', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper).toMatchSnapshot;
})

test('Test that text is found', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
})

test('Spying on the console.log call', () => {
  const wrapper = shallow(<Notifications />);
  const spy = jest.spyOn(console, 'log');
  const instance = wrapper.instance();
  instance.markAsRead(1);
  expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  spy.mockRestore();
})

test('Testing hiding and showing notifications', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();
  const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer}/>);
  wrapper.find("#Display").simulate('click');
  expect(handleDisplayDrawer).toHaveBeenCalled();
  wrapper.find("#Close").simulate('click');
  expect(handleHideDrawer).toHaveBeenCalled();
})
