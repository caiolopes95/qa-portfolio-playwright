import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';

let loginPage: LoginPage;
let productsPage: ProductsPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);

    await loginPage.visit();
    await loginPage.login( loginData.validUser.username, loginData.passwords.valid);
    await expect(page).toHaveURL(/inventory.html/);

});


test('TC-PROD-001 -  Validar carregamento da tela de produtos', async ({ page }) => {

    await expect(productsPage.productImage).toBeVisible();
    await expect(productsPage.productName).not.toHaveText('');
    await expect(productsPage.productDescription).not.toHaveText('');
    await expect(productsPage.productPrice).toBeVisible();

});


test('TC-PROD-002 - Visualizar detalhes de um produto', async ({ page }) => {
    await productsPage.productImage.click();
    await expect(page).toHaveURL(/inventory-item\.html\?id=/);
    
});


test('TC-PROD-003 - Retornar à lista de produtos após visualizar os detalhes', async ({ page }) => {
    await productsPage.productImage.click();
    await productsPage.backToProducts.click();
    await expect(page).toHaveURL(/inventory\.html/);
 
});


test('TC-PROD-004 - Ordenar produtos por nome (A → Z)', async ({ page }) => {
  
    await productsPage.selectFilter('az');

    const names = await productsPage.productNames.allTextContents();

    const sortedNames = [...names].sort((a, b) =>
        a.localeCompare(b)
    );
    expect(names).toEqual(sortedNames);

});


test('TC-PROD-005 - Ordenar produtos por nome (Z → A)', async ({ page }) => {
  
    await productsPage.selectFilter('za');

    const names = await productsPage.productNames.allTextContents();

    const sortedNames = [...names].sort((a, b) =>
        b.localeCompare(a)
    );
    expect(names).toEqual(sortedNames);
});


test('TC-PROD-006 - Ordenar produtos por preço (Menor → Maior)', async () => {

    await productsPage.selectFilter('lohi');

    const prices = await productsPage.productPrice.allTextContents();

    const numericPrices = prices.map(price =>
        Number(price.replace('$', ''))
    );

    const sortedPrices = [...numericPrices].sort((a, b) =>
        a - b
    );

    expect(numericPrices).toEqual(sortedPrices);
});


test('TC-PROD-007 - Ordenar produtos por preço (Maior → Menor)', async ({ page }) => {
    await productsPage.selectFilter('lohi');

    const prices = await productsPage.productPrice.allTextContents();

    const numericPrices = prices.map(price =>
        Number(price.replace('$', '')) );

    const sortedPrices = [...numericPrices].sort((a, b) => a - b);

    expect(numericPrices).toEqual(sortedPrices);  

});