import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm}>
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <div className={styles.loginBtnContainer}>
          <button className={styles.loginBtn}>Log In</button>
          <p>
            <a href="#">Forget Password</a> Don't have an account?
            <a href="#">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
