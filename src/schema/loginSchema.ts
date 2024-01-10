import * as yup from 'yup';
import { TRANSLATE_TEXT } from '../language/translationOptions';

export const loginSchemaEn = yup
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
  })
  .required(TRANSLATE_TEXT.required.en);

export const loginSchemaRu = yup
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
  })
  .required(TRANSLATE_TEXT.required.ru);
