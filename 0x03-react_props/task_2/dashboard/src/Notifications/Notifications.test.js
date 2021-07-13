import Notifications from './Notifications'
import React from 'react'
import '@testing-library/react'
import { render, shallow } from 'enzyme'
import NotificationItem from './NotificationItem'

test('Testing for a crash', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that list items are created', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find(NotificationItem)).toHaveLength(3);
})

test('Test that text is found', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
})

test('Making sure html is rendered', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find(NotificationItem).first().html()).toContain('New course available');
})
