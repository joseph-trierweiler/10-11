import React, { useState } from 'react';
import LoginSignUpModal from './components/login/LoginSignUpModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App" data-testId="App">
      {!isModalOpen && (
        <button className="openLoginSignUpModal" onClick={modalHandler}>
          LogIn | Sign Up
        </button>
      )}
      {isModalOpen && <LoginSignUpModal isModalClosed={setIsModalOpen} />}
    </div>
  );
}

export default App;
