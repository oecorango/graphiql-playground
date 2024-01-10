import React from 'react';
import { SignUpForm } from '../components/SignUpForm';
import styles from './RegistrationPage.module.scss';
import { useAppSelector } from '../hooks/useRedux';
import { translate } from '../utils/translateText';

export const RegistrationPage = () => {
  const language = useAppSelector((state) => state.language.language);

  return (
    <div className={styles.container}>
      <h1>{translate('headerRegistration', language)}</h1>
      <SignUpForm />
    </div>
  );
};
