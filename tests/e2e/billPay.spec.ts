import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { BillPayPage } from '../pages/billpay.page';
import users from '../data/users.json';

test('(@regression) Pay a bill', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const bill = new BillPayPage(page);
  await dashboard.gotoHome();
  await dashboard.openBillPay();
  await bill.payBill(users.payee);
  await expect(bill.successMessage()).toBeVisible();
});
