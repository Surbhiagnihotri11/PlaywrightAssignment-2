import { test as base, chromium } from '@playwright/test';
import users from '../data/users.json';

type MyFixtures = {
  user: typeof users.newUser;
};

export const test = base.extend<MyFixtures>({
  user: async ({}, use) => {
    await use(users.newUser);
  },
  storageState: async ({ user }, use) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Try login first
    await page.fill('input[name="username"]', user.username);
    await page.fill('input[name="password"]', user.password);
    await page.click('input[value="Log In"]');

    // If login failed, register a new user
    if ((await page.locator('text=The username and password could not be verified').count()) > 0) {
      await page.click('text=Register');
      const uniqueUser = `${user.username}_${Date.now()}`;

      await page.fill('input[name="customer.firstName"]', user.firstName);
      await page.fill('input[name="customer.lastName"]', user.lastName);
      await page.fill('input[name="customer.address.street"]', user.address);
      await page.fill('input[name="customer.address.city"]', user.city);
      await page.fill('input[name="customer.address.state"]', user.state);
      await page.fill('input[name="customer.address.zipCode"]', user.zipCode);
      await page.fill('input[name="customer.phoneNumber"]', user.phone);
      await page.fill('input[name="customer.ssn"]', user.ssn);
      await page.fill('input[name="customer.username"]', uniqueUser);
      await page.fill('input[name="customer.password"]', user.password);
      await page.fill('input[name="repeatedPassword"]', user.password);

      await Promise.all([
        page.waitForNavigation(),
        page.click('input[value="Register"]')
      ]);
    }

    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'tests/fixtures/storageState.json' });
    await browser.close();

    await use('tests/fixtures/storageState.json');
  },
});

export const expect = test.expect;
