import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Testing Renders
test('Card renders without crashing', () => {
  render(<Card />);
});

test('NavBar renders without crashing', () => {
  render(<NavBar />);
});

test('App renders without crashing', () => {
  render(<App />);
});
