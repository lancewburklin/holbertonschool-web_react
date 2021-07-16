import Footer from './Footer'
import React from 'react'
import { render, shallow } from 'enzyme'

test('Testing for Footer crash', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing for Copyright', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text().includes('Copyright')).toBe(true);
})
