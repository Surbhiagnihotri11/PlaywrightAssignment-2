import { test, expect } from '../fixtures/auth.fixture';
import { DashboardPage } from '../pages/dashboard.page';

test('(@regression) Open new account', async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.openNewAccount();

  await page.waitForSelector('text=Account Opened!', { state: 'visible', timeout: 15000 });
  await expect(page.locator('text=Account Opened!')).toBeVisible();
});
