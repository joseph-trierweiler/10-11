import React, { useState } from 'react';
import LoginSignUpModal from './components/login/LoginSignUpModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(true);
  };

  return <div className="App">hey</div>;
}

export default App;
