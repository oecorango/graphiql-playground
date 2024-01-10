import { loginSchemaEn } from '../schema/loginSchema';
import { expect, describe, it } from 'vitest';
describe('Login Validation Schema', () => {
  it('should validate with correct input', async () => {
    const validData = {
      email: 'test@example.com',
      password: 'Test@123',
    };

    await expect(loginSchemaEn.isValid(validData)).resolves.toBe(true);
  });

  it('should not validate with incorrect email format', async () => {
    const invalidEmailData = {
      email: 'invalidemail',
      password: 'Test@123',
    };

    await expect(loginSchemaEn.isValid(invalidEmailData)).resolves.toBe(false);
  });

  it('should not validate with weak password', async () => {
    const weakPasswordData = {
      email: 'test@example.com',
      password: 'weakpassword',
    };

    await expect(loginSchemaEn.isValid(weakPasswordData)).resolves.toBe(false);
  });
});
