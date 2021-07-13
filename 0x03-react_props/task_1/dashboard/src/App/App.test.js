import React from 'react'
import '@testing-library/react'
import { render } from 'enzyme'
import App from './App.js'

test('Testing if App renders', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot;
})

test('Testing that Notifications is made', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.Notifications')).not.toBe(null);
})

test('Testing that App-header is made', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.App-header')).not.toBe(null);
})

test('Testing for App-body', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.App-body')).not.toBe(null);
})

test('Testing for App-footer', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.App-footer')).not.toBe(null);
})
