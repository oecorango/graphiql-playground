import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.[\]|`~\-\\]).{8,}$/,
        'Password should contain at least 8 characters with at least one number, one uppercase letter, one lowercase letter, and one special character'
      )
      .required(),
  })
  .required();
