import { type Locator, type Page } from '@playwright/test';

export class UserPage {
    readonly page: Page;
    readonly userNameValue: Locator;
    readonly logOut: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameValue = page.locator('#userName-value');
        this.logOut = page.getByText('Log out');
    }

    async logMeOut() {
        await this.logOut.click();
    }
}