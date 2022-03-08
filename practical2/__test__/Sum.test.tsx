import MyName from '../component/MyName';
import { render, screen } from '@testing-library/react';
import React from 'react';

function sum(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}
describe('Sum function', () => {
  test('should add numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  test('Should not add inputs', () => {
    const result = sum(1, '2');
    expect(result).toBeFalsy;
  });
});

test('2 test', () => {
  render(<MyName name={'Kruti'} />);
  const element = screen.getByText('Kruti');
  expect(element).toBeInTheDocument;
});
