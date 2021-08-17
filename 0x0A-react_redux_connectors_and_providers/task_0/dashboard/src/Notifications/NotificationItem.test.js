import React from 'react'
import NotificationItem from './NotificationItem'
import Notifications from './Notifications'
import { shallow } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Checking that Notification Items render', () => {
  const wrapper = shallow(<NotificationItem type="defult" />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing dummy props', () => {
  const wrapper = shallow(<NotificationItem type='default' value='PINEAPPLES BRO'/>);
  expect(wrapper.text()).toContain('PINEAPPLES BRO');
  expect(wrapper.contains(<li data-notification-type='default'></li>))
})

test('Testing HTML prop', () => {
  const note = { __html: "<u>PINEAPPLES</u>" }
  const newWrapper = shallow(<NotificationItem type='default' html={note}/>);
  expect(newWrapper.html()).toContain('<u>PINEAPPLES</u>');
})
