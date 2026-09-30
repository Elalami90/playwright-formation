import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    // =========================
    // ATTRIBUTS / LOCATORS
    // =========================

    readonly page: Page;

    // Titre de la page panier
    readonly cartTitle: Locator;

    // Quantité du produit
    readonly productQuantity: Locator;


    // Qsupprimer produit
    readonly removeProduct: Locator;


    // =========================
    // CONSTRUCTEUR
    // =========================

    constructor(page: Page) {

        this.page = page;

        // Localiser le titre "Your Cart"
        this.cartTitle =
            page.getByText('Your Cart');

        // Localiser la quantité du produit
        this.productQuantity =
            page.locator('.cart_quantity');


        // localiser le boutton remove
        this.removeProduct = page.getByRole('button', { name: 'Remove' });
    }


    // =========================
    // VERIFICATIONS
    // =========================

    // Vérifier que la page panier est affichée
    async verifyCartPage() {

        await expect(this.cartTitle)
            .toBeVisible();
    }


    // Vérifier qu'un produit précis
    // est présent dans le panier
    async verifyProduct(productName: string) {

        await expect(
            this.page.getByText(productName)
        ).toBeVisible();
    }


    // Vérifier la quantité du produit
    async verifyQuantity(quantity: string) {

        await expect(this.productQuantity)
            .toHaveText(quantity);
    }

    // Vérifier le nom du boutton
    async verifyNameButton() {
        await expect(this.removeProduct).toBeVisible();
    }

    async clickRemove() {

    // vider le panier
     await this.removeProduct.click();
}
}