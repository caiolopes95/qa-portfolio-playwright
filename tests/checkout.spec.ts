
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import loginData from '../fixtures/loginData.json';
import checkoutData from '../fixtures/checkoutData.json';

let loginPage: LoginPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.visit();

    await loginPage.login(
        loginData.validUser.username,
        loginData.passwords.valid
    );

    await cartPage.addToCartFromList();
    await cartPage.goToCart();

});

test('TC-CHK-001 - Iniciar o checkout com produto no carrinho', async ({ page }) => {

    await checkoutPage.accessCheckout();

    await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test('TC-CHK-002 - Finalizar o checkout com dados válidos', async ({ page }) => {

    await checkoutPage.accessCheckout();

    await checkoutPage.typeFirstName(checkoutData.validCustomer.firstName);
    await checkoutPage.typeLastName(checkoutData.validCustomer.lastName);
    await checkoutPage.typePostalCode(checkoutData.validCustomer.postalcode);
    await checkoutPage.clickContinue();

    await expect(page).toHaveURL(/checkout-step-two\.html/);
});

test('TC-CHK-003 - Validar obrigatoriedade do campo First Name', async () => {

    await checkoutPage.accessCheckout();

    await checkoutPage.typeLastName(checkoutData.validCustomer.lastName);
    await checkoutPage.typePostalCode(checkoutData.validCustomer.postalcode);
    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required');
});

test('TC-CHK-004 - Validar obrigatoriedade do campo Last Name', async () => {

    await checkoutPage.accessCheckout();

    await checkoutPage.typeFirstName(checkoutData.validCustomer.firstName);
    await checkoutPage.typePostalCode(checkoutData.validCustomer.postalcode);
    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMessage).toHaveText('Error: Last Name is required');
});

test('TC-CHK-005 - Validar obrigatoriedade do campo Postal Code', async () => {

    await checkoutPage.accessCheckout();
    await checkoutPage.typeFirstName(checkoutData.validCustomer.firstName);
    await checkoutPage.typeLastName(checkoutData.validCustomer.lastName);
    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMessage).toHaveText('Error: Postal Code is required');
});

test('TC-CHK-006 - Cancelar o checkout na etapa de informações', async ({ page }) => {

    await checkoutPage.accessCheckout();
    await checkoutPage.cancelCheckout();

    await expect(page).toHaveURL(/cart\.html/);
});

test('TC-CHK-007 - Validar as informações dos produtos na etapa Overview', async ({ page }) => {

    await checkoutPage.goToOverviewPage(
        checkoutData.validCustomer.firstName,
        checkoutData.validCustomer.lastName,
        checkoutData.validCustomer.postalcode
    );

    await expect(page).toHaveURL(/checkout-step-two\.html/);

    await expect(checkoutPage.productName).toHaveText('Sauce Labs Backpack');
    await expect(checkoutPage.productDescription).toContainText('carry.allTheThings() with the sleek');
    await expect(checkoutPage.productPrice).toHaveText('$29.99');
    await expect(checkoutPage.taxLabel).toContainText('$2.40');
    await expect(checkoutPage.totalLabel).toContainText('$32.39');
});

test('TC-CHK-008 - Cancelar o checkout na etapa Overview', async ({ page }) => {

    await checkoutPage.goToOverviewPage(
        checkoutData.validCustomer.firstName,
        checkoutData.validCustomer.lastName,
        checkoutData.validCustomer.postalcode
    );

    await checkoutPage.cancelCheckout();

    await expect(page).toHaveURL(/inventory\.html/);
});

test('TC-CHK-009 - Finalizar a compra', async ({ page }) => {

    await checkoutPage.goToOverviewPage(
        checkoutData.validCustomer.firstName,
        checkoutData.validCustomer.lastName,
        checkoutData.validCustomer.postalcode
    );

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});

test('TC-CHK-010 - Retornar para a página inicial após concluir a compra', async ({ page }) => {

    await checkoutPage.goToOverviewPage(
        checkoutData.validCustomer.firstName,
        checkoutData.validCustomer.lastName,
        checkoutData.validCustomer.postalcode
    );

    await checkoutPage.finishCheckout();
    await checkoutPage.backHome();

    await expect(page).toHaveURL(/inventory\.html/);
});
