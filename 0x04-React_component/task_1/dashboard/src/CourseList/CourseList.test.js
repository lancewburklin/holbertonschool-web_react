import React from 'react'
import CourseList from './CourseList'
import { render, shallow } from 'enzyme'
import CourseListRow from './CourseListRow'

test('Testing that CourseList render', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper).toMatchSnapshot;
})
