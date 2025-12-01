import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';

test('(@smoke) Logout from account', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.gotoHome();
  await dashboard.logout();
  // await expect(page.locator('input[value="Log In"]')).toBeVisible();
  await page.locator('text=Log Out').waitFor({ state: 'visible', timeout: 15000 });
await page.click('text=Log Out');
});
