import React from 'react'
import CourseList from './CourseList'
import '@testing-library/react'
import { render, shallow } from 'enzyme'
import CourseListRow from './CourseListRow'

test('Testing that CourseList render', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that COurseList for 5 rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  })
