import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async gotoHome() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }
}
