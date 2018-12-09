import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

test('nothing', () => {
  const { debug } = render(<App />);
  debug();
  expect(true).toBe(true);
});
