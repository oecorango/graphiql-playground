import { useNavigate } from 'react-router-dom';
import { Logo } from './svg/LogoSvg';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';

export const Header = () => {
  const navigate = useNavigate();
  const [curLanguage, setCurLanguage] = useState(localStorage.getItem('lang'));

  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        offset ? `${styles.header} ${styles.active}` : `${styles.header}`
      }
    >
      <div
        className={
          offset ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`
        }
      >
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
