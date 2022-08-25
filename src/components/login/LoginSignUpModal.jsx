import React from 'react';
import LoginForm from './LoginForm';
import styles from './LoginSignUpModal.module.css';
import GooglePlus from '../../assets/images/google-plus.png';
import Facebook from '../../assets/images/facebook.png';

const LoginSignUpModal = (props) => {
  const closeModal = () => props.isModalClosed(false);

  return (
    <div className={styles.modalBackground} data-testedid="LoginSignUpModal">
      <div className={styles.modalContainer}>
        <div className={styles.loginContainer}>
          <h1>Log In to Your Account</h1>
          <p>Login using social networks</p>
          <section className={styles.brandIconsContainer}>
            <img
              src={GooglePlus}
              alt="google plus icon"
              className={styles.brandIcon}
            />
            <img
              src={Facebook}
              alt="facebook icon"
              className={styles.brandIcon}
            />
          </section>
          <LoginForm />
        </div>
        <div className={styles.signUpContainer}>
          <button className={styles.closeModalBtn} onClick={closeModal}>
            &times;
          </button>
          <section className={styles.signUpMessage}>
            <h1>New Here?</h1>
            <p>Order ahead and let's eat!</p>
          </section>
          <button className={styles.signUpBtn}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpModal;
