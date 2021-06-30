import Notifications from './Notifications'
import React from 'react'
import '@testing-library/react'
import { render } from 'enzyme'

test('Testing for a crash', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that list items are created', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
})

test('Test that text is found', () => {
  const wrapper = render(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
})
