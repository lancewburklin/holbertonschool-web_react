import React from 'react'
import CourseList from './CourseList'
import '@testing-library/react'
import { render, shallow } from 'enzyme'
import CourseListRow from './CourseListRow'
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Testing that CourseList render', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper).toMatchSnapshot;
})
