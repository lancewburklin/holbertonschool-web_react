import Login from './Login'
import React from 'react'
import { render, shallow } from 'enzyme'

test('Testing for Login crash', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing for input and label', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
})
