import React from 'react'
import '@testing-library/react'
import { render, shallow } from 'enzyme'
import CourseListRow from './CourseListRow'

test('Testing if isHeader is true with one cell', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Pineapples"/>)
  expect(wrapper.find('th')).toHaveLength(1);
  expect(wrapper.contains(<th colSpan="2">Pineapples</th>)).toEqual(true);
})

test('With two cells', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Pineapples" textSecondCell="Are Good" />)
  expect(wrapper.find('th')).toHaveLength(2);
})

test('Testing isHeader is false', () => {
  const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='I Like' textSecondCell='Pineapples' />);
  expect(wrapper.contains(<tr><td>I like</td><td>Pineapples</td></tr>)).toBeTrue;
})
