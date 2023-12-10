import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoginForm } from '../components/LoginForm';
import styles from './LoginPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  // const navigate = useNavigate();
  // const auth = getAuth();
  // const [user, setUser] = useState(auth.currentUser);

  // useEffect(() => {
  //   auth.onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //     if (user) {
  //       navigate('/');
  //     }
  //   });
  // }, [auth]);

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};
