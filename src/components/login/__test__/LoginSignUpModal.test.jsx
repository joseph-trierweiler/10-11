import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginSignUpModal from '../LoginSignUpModal';

it('renders without crashing', () => {
  const div = ReactDOM.createRoot(document.createElement('div'));
  div.render(<LoginSignUpModal />);
});
