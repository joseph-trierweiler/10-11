import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from '../LoginForm';

it('renders without crashing', () => {
  const div = ReactDOM.createRoot(document.createElement('div'));
  div.render(<LoginForm />);
});
