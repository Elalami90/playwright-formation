import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


test('ajouter un produit au panier', async ({ page }) => {

    // =========================
    // CRÉATION DES PAGE OBJECTS
    // =========================

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);


    // =========================
    // 1. CONNEXION
    // =========================

    await loginPage.open();

    // saisir login et mdp
    await loginPage.enterCredentials(
        'standard_user',
        'secret_sauce'
    );
    //vérifier le nom saisie
    await loginPage.verifyUsername(
        'standard_user'

    );
    //appuyet sur le bouttn login
    await loginPage.clickLogin();

    // =========================
    // 2. VÉRIFIER PRODUCTS
    // =========================

    await expect(
        page.getByText('Products')
    ).toBeVisible();


    // =========================
    // 3. AJOUTER LE PRODUIT
    // =========================

    await productsPage.addProductToCart(
        'Sauce Labs Backpack'
    );


    // =========================
    // 4. VÉRIFIER LE COMPTEUR
    // =========================

    await expect(
        productsPage.shoppingCartBadge
    ).toHaveText('1');


    // =========================
    // 5. OUVRIR LE PANIER
    // =========================

    await productsPage.openCart();


    // =========================
    // 6. VÉRIFIER LE PRODUIT
    // =========================

    await expect(
        page.getByText('Sauce Labs Backpack')
    ).toBeVisible();

});