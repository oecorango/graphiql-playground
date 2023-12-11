import React from 'react';
import { SignUpForm } from '../components/SignUpForm';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = () => (
  <div className={styles.container}>
    <h1>You are ready?</h1>
    <SignUpForm />
  </div>
);
