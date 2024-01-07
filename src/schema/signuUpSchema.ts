import * as yup from 'yup';
import { translateText } from '../utils/translateText';

export const signUpSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(translateText('errorEmail'))
      .required(translateText('required')),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.[\]|`~\-\\]).{8,}$/,
        translateText('errorPassword')
      )
      .required(translateText('required')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], translateText('errorConfirmPassword'))
      .required(translateText('required')),
  })
  .required(translateText('required'));
