import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginForm.module.scss';
import { loginSchemaEn, loginSchemaRu } from '../schema/loginSchema';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setUser } from '../store/userSlice';
import { translate } from '../utils/translateText';

type UserLoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const language = useAppSelector((state) => state.language.language);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(language === 'en' ? loginSchemaEn : loginSchemaRu),
  });
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: UserLoginData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            name: user.displayName,
          })
        );

        navigate('/');
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <input
            role={'emailInput'}
            type="text"
            {...register('email')}
            placeholder={translate('emailPlaceholder', language)}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            role={'passwordInput'}
            type="password"
            autoComplete="off"
            {...register('password')}
            placeholder={translate('passwordPlaceholder', language)}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
        <button role={'btnSubmit'} type="submit" className={styles.button}>
          {translate('login', language)}
        </button>
      </form>
      <Link to={'/registration'} className={styles.link}>
        {translate('toRegistration', language)}
      </Link>
    </>
  );
};
