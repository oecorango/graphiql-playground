import { LoginForm } from '../components/LoginForm';
import styles from './LoginPage.module.scss';
import { translate } from '../utils/translateText';
import { useAppSelector } from '../hooks/useRedux';

export const LoginPage = () => {
  const language = useAppSelector((state) => state.language.language);

  return (
    <div className={styles.container}>
      <h1>{translate('login', language)}</h1>
      <LoginForm />
    </div>
  );
};
