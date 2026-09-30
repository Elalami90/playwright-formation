// On importe les types nécessaires depuis Playwright
import { Page, Locator } from '@playwright/test';


export class ProductsPage {

    // =========================
    // ATTRIBUTS
    // =========================

    // Page actuelle du navigateur
    readonly page: Page;

    // Locator du panier
    readonly shoppingCartLink: Locator;

    // Locator du compteur du panier
    readonly shoppingCartBadge: Locator;


    // =========================
    // CONSTRUCTEUR
    // =========================

    constructor(page: Page) {

        // On récupère la page Playwright
        this.page = page;

        // On initialise le locator du panier
        this.shoppingCartLink =
            page.locator('.shopping_cart_link');

        // On initialise le compteur du panier
        this.shoppingCartBadge =
            page.locator('.shopping_cart_badge');
    }


    // =========================
    // MÉTHODES
    // =========================

    // Ajouter un produit au panier
    async addProductToCart(productName: string) {

        // On récupère toutes les cartes produits,
        // puis on garde celle contenant le nom demandé
        const product = this.page
            .locator('.inventory_item')
            .filter({ hasText: productName });

        // Dans CE produit uniquement,
        // on clique sur Add to cart
        await product
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }


    // Ouvrir le panier
    async openCart() {

        await this.shoppingCartLink.click();
    }
}