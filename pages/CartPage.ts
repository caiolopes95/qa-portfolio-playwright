
import { Page, Locator } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly firstProduct: Locator;
    readonly firstCartItem: Locator;
    readonly seeCart: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly deleteItem: Locator;
    readonly addToCart: Locator;
    readonly removeItem: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstProduct = page.locator('.inventory_item').first();
        this.firstCartItem = page.locator('.cart_item').first();

        this.seeCart = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');

        this.productName = this.firstCartItem.locator('[data-test="inventory-item-name"]');
        this.productDescription = this.firstCartItem.locator('[data-test="inventory-item-desc"]');
        this.productPrice = this.firstCartItem.locator('[data-test="inventory-item-price"]');

        this.deleteItem = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.addToCart = page.locator('[data-test="add-to-cart"]');
        this.removeItem = page.locator('[data-test="remove"]');

        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    async addToCartFromList() {
        await this.firstProduct.getByRole('button', { name: 'Add to cart' }).click();
    }

    async goToCart() {
        await this.seeCart.click();
    }

    async deleteItemFromCart() {
        await this.deleteItem.click();
    }

    async accessDetails() {
        await this.firstProduct.locator('[data-test="inventory-item-name"]').click();
    }

    async addToCartFromDetails() {
        await this.addToCart.click();
    }

    async deleteItemFromDetails() {
        await this.removeItem.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}
