import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly firstProduct: Locator;
    readonly productImage: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly backToProducts: Locator;
    readonly sortProducts: Locator;
    readonly productNames: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstProduct = page.locator('.inventory_item').first();

        this.productImage = this.firstProduct.locator('img');
        this.productName = this.firstProduct.locator('[data-test="inventory-item-name"]');
        this.productDescription = this.firstProduct.locator('[data-test="inventory-item-desc"]');
        this.productPrice = this.firstProduct.locator('[data-test="inventory-item-price"]');
        this.backToProducts = page.locator('[data-test=back-to-products]');
        this.sortProducts = page.locator('[data-test=product-sort-container]');
        this.productNames = page.locator('[data-test="inventory-item-name"]');
    }

    async selectFilter(filter: string) {
    await this.sortProducts.selectOption(filter);
    
    }

}

