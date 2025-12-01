import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async gotoHome() {
    await this.page.click('text=Log Out');
    await this.page.waitForLoadState('networkidle');
  }

  async openNewAccount() {
    await this.page.click('text=Open New Account');
    await this.page.selectOption('#type', 'SAVINGS'); // choose account type if required
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('input[value="Open New Account"]')
    ]);
  }

  async logout() {
    await this.page.click('text=Log Out');
    await this.page.waitForLoadState('networkidle');
  }
}
