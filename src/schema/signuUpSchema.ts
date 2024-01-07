import * as yup from 'yup';
import { TRANSLATE_TEXT } from '../language/translationOptions';

export const signUpSchemaEn = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(TRANSLATE_TEXT.errorEmail.en)
      .required(TRANSLATE_TEXT.required.en),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.[\]|`~\-\\]).{8,}$/,
        TRANSLATE_TEXT.errorPassword.en
      )
      .required(TRANSLATE_TEXT.required.en),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], TRANSLATE_TEXT.errorConfirmPassword.en)
      .required(TRANSLATE_TEXT.required.en),
  })
  .required(TRANSLATE_TEXT.required.en);

export const signUpSchemaRu = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(TRANSLATE_TEXT.errorEmail.ru)
      .required(TRANSLATE_TEXT.required.ru),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.[\]|`~\-\\]).{8,}$/,
        TRANSLATE_TEXT.errorPassword.ru
      )
      .required(TRANSLATE_TEXT.required.ru),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], TRANSLATE_TEXT.errorConfirmPassword.ru)
      .required(TRANSLATE_TEXT.required.ru),
  })
  .required(TRANSLATE_TEXT.required.ru);
