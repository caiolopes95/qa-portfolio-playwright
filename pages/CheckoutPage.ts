
import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;
    readonly checkout: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly buttonContinue: Locator;
    readonly cancel: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly taxLabel: Locator;
    readonly totalLabel: Locator;
    readonly finish: Locator;
    readonly home: Locator;
    readonly errorMessage: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;

        this.checkout = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.buttonContinue = page.locator('[data-test="continue"]');
        this.cancel = page.locator('[data-test="cancel"]');

        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.productDescription = page.locator('[data-test="inventory-item-desc"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');

        this.taxLabel = page.locator('[data-test="tax-label"]');
        this.totalLabel = page.locator('[data-test="total-label"]');

        this.finish = page.locator('[data-test="finish"]');
        this.home = page.locator('[data-test="back-to-products"]');

        this.errorMessage = page.locator('[data-test="error"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
    }

    async accessCheckout() {
        await this.checkout.click();
    }

    async typeFirstName(name: string) {
        await this.firstName.fill(name);
    }

    async typeLastName(last: string) {
        await this.lastName.fill(last);
    }

    async typePostalCode(code: string) {
        await this.postalCode.fill(code);
    }

    async clickContinue() {
        await this.buttonContinue.click();
    }

    async cancelCheckout() {
        await this.cancel.click();
    }

    async goToOverviewPage(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.accessCheckout();
        await this.typeFirstName(firstName);
        await this.typeLastName(lastName);
        await this.typePostalCode(postalCode);
        await this.clickContinue();
    }

    async finishCheckout() {
        await this.finish.click();
    }

    async backHome() {
        await this.home.click();
    }
}
