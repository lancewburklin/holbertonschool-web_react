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

test('Testing hiding and showing notifications', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();
  const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer}/>);
  wrapper.find("#Display").simulate('click');
  expect(handleDisplayDrawer).toHaveBeenCalled();
  wrapper.find("#Close").simulate('click');
  expect(handleHideDrawer).toHaveBeenCalled();
})
