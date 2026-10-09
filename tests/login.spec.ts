import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.visit();
});

test('TC-LOGIN-001 - Login com credenciais válidas', async ({ page }) => {

  await loginPage.login( loginData.validUser.username, loginData.passwords.valid)

    await expect(page).toHaveURL(/inventory.html/);
});


test('TC-LOGIN-02 -Login com senha inválida', async ({ page }) => {

    await loginPage.login( loginData.validUser.username, loginData.passwords.invalid)

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});


test('TC-LOGIN-003 - Login sem preencher o usuário', async ({ page }) => {

    await loginPage.login( '',loginData.passwords.valid)

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
});


test('TC-LOGIN-004 - Login sem preencher a senha', async ({ page }) => {

    await loginPage.login( loginData.validUser.username,'')

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
});


test('TC-LOGIN-005 - Login sem preencher usuário e senha', async ({ page }) => {

    await loginPage.login( '','')

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
});


test('TC-LOGIN-006 - Login com usuário inexistente', async ({ page }) => {

    await loginPage.login( loginData.wrongUser.username,loginData.passwords.valid)

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});


test('TC-LOGIN-007 - Login com usuário bloqueado', async ({ page }) => {

    await loginPage.login( loginData.lockedUser.username,loginData.passwords.valid)

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});