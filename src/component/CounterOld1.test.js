import { render, screen, fireEvent } from '@testing-library/react';
import CounterOld1 from './CounterOld1';
import '@testing-library/jest-dom';

test('renders the initial counts and button', () => {
  render(<CounterOld1 />);

  const counterElement = screen.getAllByText('You clicked 0 times')[0];
  const button = screen.getAllByText('Click me')[0];

  expect(counterElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('incoments the count when the increment button is clicked', () => {
  render(<CounterOld1 />);

  const counterElement = screen.getAllByText('You clicked 0 times')[0];
  const button = screen.getAllByText('Click me')[0];

  fireEvent.click(button);

  expect(counterElement).toHaveTextContent('You clicked 1 times');
});
