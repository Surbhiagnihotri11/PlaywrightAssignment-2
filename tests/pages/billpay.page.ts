import { BasePage } from './base.page';

export class BillPayPage extends BasePage {
  async payBill(payee: any) {
    await this.page.fill('input[name="payee.name"]', payee.name);
    await this.page.fill('input[name="payee.address.street"]', payee.address);
    await this.page.fill('input[name="payee.city"]', payee.city);
    await this.page.fill('input[name="payee.state"]', payee.state);
    await this.page.fill('input[name="payee.zipCode"]', payee.zip);
    await this.page.fill('input[name="payee.phoneNumber"]', payee.phone);
    await this.page.fill('input[name="payee.accountNumber"]', payee.account);
    await this.page.fill('input[name="verifyAccount"]', payee.account);
    await this.page.fill('input[name="amount"]', payee.amount);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('input[value="Send Payment"]'),
    ]);
  }

  async successMessage() {
    return this.page.locator('text=Bill Payment Complete');
  }
}
