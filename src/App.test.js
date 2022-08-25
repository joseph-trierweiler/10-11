import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = ReactDom.createRoot(document.createElement('div'));
  div.render(<App />);
});
