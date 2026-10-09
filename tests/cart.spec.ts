
import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';

let cartPage: CartPage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {

    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);

    await loginPage.visit();
    await loginPage.login(
        loginData.validUser.username,
        loginData.passwords.valid
    );

    await expect(page).toHaveURL(/inventory\.html/);
});

test('TC-CART-001 - Adicionar um produto ao carrinho pela listagem', async () => {

    await cartPage.addToCartFromList();
    await expect(cartPage.cartBadge).toHaveText('1');
});

test('TC-CART-002 - Visualizar os produtos adicionados ao carrinho', async ({ page }) => {

    await cartPage.addToCartFromList();
    await cartPage.goToCart();

    await expect(page).toHaveURL(/cart\.html/);
    await expect(cartPage.firstCartItem).toBeVisible();
});

test('TC-CART-003 - Validar as informações do produto no carrinho', async () => {

    await cartPage.addToCartFromList();
    await cartPage.goToCart();

    await expect(cartPage.productName).not.toHaveText('');
    await expect(cartPage.productDescription).not.toHaveText('');
    await expect(cartPage.productPrice).toBeVisible();
});

test('TC-CART-004 - Remover um produto diretamente do carrinho', async () => {

    await cartPage.addToCartFromList();
    await cartPage.goToCart();

    await cartPage.deleteItemFromCart();

    await expect(cartPage.firstCartItem).toHaveCount(0);
    await expect(cartPage.cartBadge).toHaveCount(0);
});

test('TC-CART-005 - Adicionar um produto ao carrinho pela tela de detalhes', async () => {

    await cartPage.accessDetails();
    await cartPage.addToCartFromDetails();

    await expect(cartPage.cartBadge).toHaveText('1');
});

test('TC-CART-006 - Remover um produto pela tela de detalhes', async () => {

    await cartPage.accessDetails();
    await cartPage.addToCartFromDetails();
    await cartPage.deleteItemFromDetails();

    await expect(cartPage.cartBadge).toHaveCount(0);
});

test('TC-CART-007 - Continuar comprando a partir do carrinho', async ({ page }) => {

    await cartPage.addToCartFromList();
    await cartPage.goToCart();
    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory\.html/);
});
