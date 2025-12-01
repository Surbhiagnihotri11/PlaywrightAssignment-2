import { test, expect } from '@playwright/test';

test('(@smoke) Verify Parabank homepage title', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page).toHaveTitle(/ParaBank/);
});
