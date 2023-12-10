import { GitSvg } from './svg/GitSvg';
import { RsSchoolSvg } from './svg/RsSchoolSvg';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Link to={'https://rs.school/'}>
          <RsSchoolSvg />
        </Link>

        <p>2023</p>

        <Link to={'https://github.com/egorca6/graphiql-app'}>
          <GitSvg />
        </Link>
      </div>
    </footer>
  );
};
