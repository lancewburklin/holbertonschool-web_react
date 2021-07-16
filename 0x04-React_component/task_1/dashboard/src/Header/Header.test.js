import Header from './Header'
import React from 'react'
import { render, shallow } from 'enzyme'

test('Testing for Header crash', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing for img and h1 tag', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img')).not.toBe(null);
  expect(wrapper.find('h1')).not.toBe(null);
})
