import React from 'react'
import {shallow} from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Testing that BodySection is rendered', () => {
  const wrapper = shallow(<BodySectionWithMarginBottom />);
  expect(wrapper.find(BodySection)).toHaveLength(1);
})
