import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginForm.module.scss';
import { loginSchema } from '../schema/loginSchema';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { setUser } from '../store/userSlice';

type UserLoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });
  const auth = getAuth();
  const dispatch = useAppDispatch();

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
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return (
    <>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <input type="text" {...form.register('email')} />
        <input
          type="password"
          autoComplete="off"
          {...form.register('password')}
        />
        <button type="submit">Sign in</button>
      </form>
      <Link to={'/registration'}>Registration</Link>
    </>
  );
};
