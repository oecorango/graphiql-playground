import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './svg/LogoSvg';
import styles from './Header.module.scss';
import { getAuth, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const Header = () => {
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
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <p>RSGr</p>
          <Logo />
          <p>phQL</p>
        </div>
        <div className={styles.navigation}>
          <select name="lang">
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>
          <NavLink to={'/'}>Main</NavLink>
          <NavLink to={'welcome'}>Welcome</NavLink>
          {user ? (
            <button onClick={handleSignOut} className={styles.button}>
              Sign Out
            </button>
          ) : (
            <>
              <NavLink to={'registration'}>SignUp</NavLink>
              <NavLink to={'login'}>LogIn</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
