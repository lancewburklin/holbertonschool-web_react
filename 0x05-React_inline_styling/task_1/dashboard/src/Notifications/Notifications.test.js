/**
 * @jest-environment jsdom
 */

import Notifications from './Notifications'
import React from 'react'
import { render, shallow } from 'enzyme'
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
