import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import users from '../data/users.json';

test('(@regression) Register new user', async ({ page }) => {
  const register = new RegisterPage(page);
  await register.gotoHome();
  await register.openRegistration();

  const user = { ...users.newUser, username: `${users.newUser.username}_${Date.now()}` };
  await register.registerUser(user);

  await expect(register.successMessage()).toBeVisible();
});
