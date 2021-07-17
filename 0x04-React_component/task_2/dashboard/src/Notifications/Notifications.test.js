/**
 * @jest-environment jsdom
 */

import Notifications from './Notifications'
import React from 'react'
import '@testing-library/react'
import { render, shallow } from 'enzyme'
import NotificationItem from './NotificationItem'

test('Testing for a crash', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper).toMatchSnapshot;
})

test('Test that text is found', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
})

test('Checking when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('.menuItem')).toHaveLength(1);
  expect(wrapper.find('.Notifications').get(0).props.style).toHaveProperty('display', 'none')
})

test('Checking when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('.menuItem')).toHaveLength(1);
  expect(wrapper.find('.Notifications').get(0).props.style).toHaveProperty('display', 'block')
})

test('Spying on the console.log call', () => {
  const wrapper = shallow(<Notifications />);
  const spy = jest.spyOn(console, 'log');
  const instance = wrapper.instance();
  instance.markAsRead(1);
  expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  spy.mockRestore();
})
