
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import loginData from '../fixtures/loginData.json';
import checkoutData from '../fixtures/checkoutData.json';

test('REG-001 - Realizar uma compra com sucesso @regression @e2e', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. LOGIN
    await test.step('Realizar login', async () => {

        await loginPage.visit();

        await loginPage.login(
            loginData.validUser.username,
            loginData.passwords.valid
        );

        await expect(page).toHaveURL(/inventory\.html/);
    });

    // 2. CATÁLOGO
    await test.step('Adicionar produto ao carrinho', async () => {

        await cartPage.addToCartFromList();

        await expect(cartPage.cartBadge).toHaveText('1');
    });

    // 3. CARRINHO
    await test.step('Validar produto no carrinho', async () => {

        await cartPage.goToCart();

        await expect(page).toHaveURL(/cart\.html/);

        await expect(cartPage.firstCartItem).toBeVisible();

        await expect(cartPage.productName)
            .toHaveText('Sauce Labs Backpack');

        await expect(cartPage.productPrice)
            .toHaveText('$29.99');
    });

    // 4. CHECKOUT
    await test.step('Preencher informações do comprador', async () => {

        await checkoutPage.goToOverviewPage(
            checkoutData.validCustomer.firstName,
            checkoutData.validCustomer.lastName,
            checkoutData.validCustomer.postalcode
        );

        await expect(page)
            .toHaveURL(/checkout-step-two\.html/);
    });

    // 5. OVERVIEW
    await test.step('Validar resumo da compra', async () => {

        await expect(checkoutPage.productName)
            .toHaveText('Sauce Labs Backpack');

        await expect(checkoutPage.productPrice)
            .toHaveText('$29.99');

        await expect(checkoutPage.taxLabel)
            .toContainText('$2.40');

        await expect(checkoutPage.totalLabel)
            .toContainText('$32.39');
    });

    // 6. FINALIZAR COMPRA
    await test.step('Finalizar compra com sucesso', async () => {

        await checkoutPage.finishCheckout();

        await expect(page)
            .toHaveURL(/checkout-complete\.html/);

        await expect(checkoutPage.completeHeader)
            .toHaveText('Thank you for your order!');
    });

    // 7. RETORNAR AO CATÁLOGO
    await test.step('Retornar ao catálogo', async () => {

        await checkoutPage.backHome();

        await expect(page)
            .toHaveURL(/inventory\.html/);

        await expect(page.locator('.inventory_item').first())
            .toBeVisible();
    });
});
