import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './SignUpForm.module.scss';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signUpSchema } from '../schema/signuUpSchema';
import { useAppDispatch } from '../hooks/useRedux';
import { setUser } from '../store/userSlice';

type UserSignUpData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema),
  });
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
        navigate('/');
      })
      .catch((error) => {
        console.warn(error.message);
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
            placeholder="Email"
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
            placeholder="Password"
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            role={'confirmPasswordInput'}
            type="password"
            autoComplete="off"
            {...register('confirmPassword')}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <button role={'btnSubmit'} type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
      <Link to={'/login'} className={styles.link}>
        Already have an account? Log in
      </Link>
    </>
  );
};
