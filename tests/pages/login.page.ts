import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoHome() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('input[value="Log In"]')
    ]);
  }
}
