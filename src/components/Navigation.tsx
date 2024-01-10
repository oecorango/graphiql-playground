import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useWidthResize } from '../hooks/useResize';
import { translate } from '../utils/translateText';
import { AboutSvg } from './svg/AboutSvg';
import { LoginSvg } from './svg/LoginSvg';
import { MainSvg } from './svg/MainSvg';
import { getAuth, signOut } from 'firebase/auth';
import styles from './Navigation.module.scss';
import { ExitSvg } from './svg/ExitSvg';
import { RegistrationSvg } from './svg/RegistrationSvg';
import { useAppSelector } from '../hooks/useRedux';

export const Navigation = () => {
  const widthResize = useWidthResize();
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const language = useAppSelector((state) => state.language.language);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/welcome');
      // console.log(user);
    } catch (error) {
      console.error('Ошибка выхода из учетной записи:', error);
    }
  };

  return (
    <>
      <NavLink to={'/'} className={styles.navLink}>
        {widthResize > 550 ? translate('main', language) : <MainSvg />}
      </NavLink>
      <NavLink to={'/welcome'} className={styles.navLink}>
        {widthResize > 550 ? translate('welcome', language) : <AboutSvg />}
      </NavLink>
      {user ? (
        <NavLink
          onClick={handleSignOut}
          to={'/welcome'}
          className={styles.navLink}
        >
          {widthResize > 550 ? translate('signout', language) : <ExitSvg />}
        </NavLink>
      ) : (
        <>
          <NavLink to={'/login'} className={styles.navLink}>
            {widthResize > 550 ? translate('login', language) : <LoginSvg />}
          </NavLink>
          <NavLink to={'/registration'} className={styles.navLink}>
            {widthResize > 550 ? (
              translate('signup', language)
            ) : (
              <RegistrationSvg />
            )}
          </NavLink>
        </>
      )}
    </>
  );
};
