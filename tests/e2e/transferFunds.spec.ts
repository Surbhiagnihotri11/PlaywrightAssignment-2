import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { TransferPage } from '../pages/transfer.page';

test('(@regression) Transfer funds', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const transfer = new TransferPage(page);
  await dashboard.gotoHome();
  await dashboard.openTransferFunds();
  await transfer.transferFunds('10');
  await expect(transfer.successMessage()).toBeVisible();
});
