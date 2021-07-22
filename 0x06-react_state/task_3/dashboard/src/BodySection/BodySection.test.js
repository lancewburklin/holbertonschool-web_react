import React from 'react'
import {shallow} from 'enzyme'
import BodySection from './BodySection'

test('Testing bodysection', () => {
  const wrapper = shallow (
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>
  )
  expect(wrapper.html()).toContain('<p>test children node</p>');
  expect(wrapper.html()).toContain('<h2>test title</h2>');
})
