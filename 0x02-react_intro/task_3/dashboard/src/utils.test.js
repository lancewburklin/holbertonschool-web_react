import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import { getLatestNotification } from './utils';
import React from 'react'
import '@testing-library/jest-dom'

test('Testing getFullYear', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});

test('Testing getFooterCopy with True and False', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
})

test('Testing getLatestNotification', () => {
  expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
})
