import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginForm.module.scss';
import { loginSchema } from '../schema/loginSchema';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useRedux';
import { setUser } from '../store/userSlice';

type UserLoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
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
          <input type="text" {...register('email')} placeholder="Email" />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            autoComplete="off"
            {...register('password')}
            placeholder="Password"
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Sign in
        </button>
      </form>
      <Link to={'/registration'} className={styles.link}>
        Don’t have account? Sign up
      </Link>
    </>
  );
};
