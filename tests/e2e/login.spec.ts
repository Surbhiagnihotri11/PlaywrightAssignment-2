import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import users from '../data/users.json';

test('(@smoke) Login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoHome();
  await login.login(users.newUser.username, users.newUser.password);
  await expect(login.logoutLink()).toBeVisible();
});
