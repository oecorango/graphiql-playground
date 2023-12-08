import * as yup from 'yup';

export const signUpSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')])
      .required(),
  })
  .required();
