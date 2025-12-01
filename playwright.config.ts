import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'https://parabank.parasoft.com/parabank/index.htm',
    headless: false,               // 👈 run headed
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  timeout: 60000,
  expect: { timeout: 10000 },
  retries: 1,
  workers: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }]]
});
