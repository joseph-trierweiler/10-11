import React from 'react';
import LoginForm from './LoginForm';
import './LoginSignUpModal.css';
import GooglePlus from '../../assets/images/google-plus.png';
import Facebook from '../../assets/images/facebook.png';

const LoginSignUpModal = (props) => {
  const closeModal = () => props.isModalClosed(false);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="loginContainer">
          <h1>Log In to Your Account</h1>
          <p>Login using social networks</p>
          <div className="brandIconsContainer">
            <img
              src={GooglePlus}
              alt="google plus icon"
              className="brandIcon"
            />
            <img src={Facebook} alt="facebook icon" className="brandIcon" />
          </div>
          <LoginForm />
        </div>
        <div className="signUpContainer">
          <button className="closeModalBtn" onClick={closeModal}>
            &times;
          </button>
          <div className="signUpMessage">
            <h1>New Here?</h1>
            <p>Order ahead and let's eat!</p>
          </div>
          <button className="signUpBttn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpModal;
