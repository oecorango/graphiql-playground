import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './svg/LogoSvg';
import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

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
          <NavLink to={'login'}>LogIn</NavLink>
          <NavLink to={'registration'}>SignUp</NavLink>
        </div>
      </div>
    </header>
  );
};
