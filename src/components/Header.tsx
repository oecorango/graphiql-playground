import { useNavigate } from 'react-router-dom';
import { Logo } from './svg/LogoSvg';
import styles from './Header.module.scss';
import { useState } from 'react';
import { Navigation } from './Navigation';

export const Header = () => {
  const navigate = useNavigate();
  const [curLanguage, setCurLanguage] = useState(localStorage.getItem('lang'));

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <p>RSGr</p>
          <Logo />
          <p>phQL</p>
        </div>
        <div className={styles.navigation}>
          <select
            name="lang"
            onChange={(e) => {
              setCurLanguage(e.target.value);
              localStorage.setItem('lang', e.target.value);
            }}
            value={curLanguage ? curLanguage : 'en'}
          >
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
