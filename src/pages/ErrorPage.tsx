import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import { ErrorSvg } from '../components/svg/404';

export const ErrorPage = () => (
  <div className={styles.container}>
    <ErrorSvg />
    <h2>Oops! Page not found!</h2>
    <h3>
      You can return to the
      <Link to={'/'} className={styles.link}>
        MAIN PAGE
      </Link>
    </h3>
  </div>
);
