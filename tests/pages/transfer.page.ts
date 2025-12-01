import { BasePage } from './base.page';

export class TransferPage extends BasePage {
  async transferFunds(amount: string) {
    await this.page.fill('input[name="amount"]', amount);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('input[value="Transfer"]'),
    ]);
  }

  async successMessage() {
    return this.page.locator('text=Transfer Complete!');
  }
}
