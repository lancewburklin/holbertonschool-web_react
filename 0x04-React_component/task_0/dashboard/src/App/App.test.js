import React from 'react'
import { shallow } from 'enzyme'
import App from './App.js'
import CourseList from '../CourseList/CourseList'
import CourseListRow from '../CourseList/CourseListRow.js'
import Login from '../Login/Login'

describe('Testing the App', () => {
  it('Testing if App redners', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot;
  })

  it('Testing that Notifications is made', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.Notifications')).not.toBe(null);
  })

  it('Testing that App-header is made', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).not.toBe(null);
  })

  it('Testing for App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).not.toBe(null);
  })

  it('Testing for App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).not.toBe(null);
  })

  it('Testing that CourseList is not displayed', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(CourseListRow)).toHaveLength(0);
  })

  it('Testing for CourseList', () => {
    const wrapper = shallow(<App isLoggedIn={true} />)
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  })
})
