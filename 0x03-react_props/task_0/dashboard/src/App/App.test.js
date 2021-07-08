import React from 'react'
import '@testing-library/react'
import { render } from 'enzyme'
import App from './App.js'

test('Testing if App renders', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot;
})
