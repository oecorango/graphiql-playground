import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './SignUpForm.module.scss';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { signUpSchema } from '../schema/signuUpSchema';
import { useAppDispatch } from '../hooks/redux';
import { setUser } from '../store/userSlice';

type UserSignUpData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema),
  });
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const onSubmit = async ({ email, password }: UserSignUpData) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            name: user.displayName,
          })
        );
      })
      .catch((error) => {
        console.warn(error.message);
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

        <input
          type="password"
          autoComplete="off"
          {...form.register('confirmPassword')}
        />

        <button type="submit">Sign Up</button>
      </form>
      <Link to={'/login'}>Login</Link>
    </>
  );
};
