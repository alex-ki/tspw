import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly title: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly logIn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.main-header', {hasText: 'Login'});
        this.userName = page.locator('#userName');
        this.password = page.locator('#password');
        this.logIn = page.locator('#login');
    }

    async login(name, pass) {
        await this.userName.fill(name);
        await this.password.fill(pass);
        await this.logIn.click();
    }
}