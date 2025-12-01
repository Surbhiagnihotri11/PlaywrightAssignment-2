import { BasePage } from './base.page';

export class AccountsPage extends BasePage {
  async createAccount() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('input[value="Open New Account"]'),
    ]);
  }

  async successMessage() {
    return this.page.locator('text=Account Opened!');
  }
}
