/**
 * @jest-environment jsdom
 */

import Login from './Login'
import React from 'react'
import { shallow } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Testing for Login crash', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing for input and label', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
})

test('Testing submit button', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('#sub').props().disabled).toBe(true);
  wrapper.find('#emailInp').simulate('change', { target: { value: 'Test' } })
  wrapper.find('#passInp').simulate('change', { target: { value: 'Test' } })
  expect(wrapper.find('#sub').props().disabled).toBe(false);
})
