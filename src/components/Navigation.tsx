import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useWidthResize } from '../hooks/useResize';
import { translateText } from '../utils/translateText';
import { AboutSvg } from '../components/svg/AboutSvg';
import { LoginSvg } from '../components/svg/LoginSvg';
import { MainSvg } from '../components/svg/MainSvg';
import { getAuth, signOut } from 'firebase/auth';

export const Navigation = () => {
  const widthResize = useWidthResize();
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

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
      <NavLink to={'/'}>
        {widthResize > 550 ? translateText('main') : <MainSvg />}
      </NavLink>
      <NavLink to={'/welcome'}>
        {widthResize > 550 ? translateText('welcome') : <AboutSvg />}
      </NavLink>
      {user ? (
        <NavLink onClick={handleSignOut} to={'/welcome'}>
          Sign Out
        </NavLink>
      ) : (
        <>
          <NavLink to={'/login'}>
            {widthResize > 550 ? translateText('login') : <LoginSvg />}
          </NavLink>
          <NavLink to={'/registration'}>
            {widthResize > 550 ? translateText('signup') : 'Not found'}
          </NavLink>
        </>
      )}
    </>
  );
};
