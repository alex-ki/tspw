import { test, expect } from '@playwright/test';
import {LoginPage} from "../../pages/login-page";
import {UserPage} from "../../pages/user-page";

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL+"/login");
});

test('Check login page', async ({ page  }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demoqa/i);
  const login = page.locator(".main-header");
  await expect(login).toHaveText('Login');
});

test('Authorise user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const userPage = new UserPage(page);
  const name = process.env.TEST_USER_EMAIL;
  const pass = process.env.TEST_USER_PASSWORD;
  await loginPage.login(name, pass);

  await expect(userPage.userNameValue).toHaveText(name);

  await userPage.logMeOut();
  await expect(loginPage.logIn).toBeVisible();
});
