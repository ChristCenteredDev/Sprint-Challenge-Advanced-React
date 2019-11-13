import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import Card from './components/Card';
import NavBar from './components/NavBar';

// Testing Renders
test('NavBar renders without crashing', () => {
  rtl.render(<NavBar />);
});

test('App renders without crashing', () => {
  rtl.render(<App />);
});

it('renders "Title of page" text', () => {
  const wrapper = rtl.render(<App />);
  // IMPORTANT
  // wrapper.queryByText() returns either the node, or null:
  const hasTitleText = document.querySelector('#title');
  expect(hasTitleText.innerHTML).toMatch("Women's World Cup");
});
