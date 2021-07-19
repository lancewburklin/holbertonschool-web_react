import React from 'react'
import {shallow} from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'

test('Testing that BodySection is rendered', () => {
  const wrapper = shallow(<BodySectionWithMarginBottom />);
  expect(wrapper.find(BodySection)).toHaveLength(1);
})
