import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';


test(
    'TC_CART_001 - Vérifier qu’un produit ajouté est présent dans le panier',
    async ({ page }) => {

        // =========================
        // CRÉATION DES PAGE OBJECTS
        // =========================

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);


        // =========================
        // 1. CONNEXION
        // =========================

        await loginPage.open();

        await loginPage.enterCredentials(
            'standard_user',
            'secret_sauce'
        );

        await loginPage.clickLogin();


        // =========================
        // 2. AJOUTER LE PRODUIT
        // =========================

        await productsPage.addProductToCart(
            'Sauce Labs Backpack'
        );


        // =========================
        // 3. OUVRIR LE PANIER
        // =========================

        await productsPage.openCart();


        // =========================
        // 4. VÉRIFIER LA PAGE PANIER
        // =========================

        await cartPage.verifyCartPage();


        // =========================
        // 5. VÉRIFIER LE PRODUIT
        // =========================

        await cartPage.verifyProduct(
            'Sauce Labs Backpack'
        );


        // =========================
        // 6. VÉRIFIER LA QUANTITÉ
        // =========================

        await cartPage.verifyQuantity('1');

        //verfier le nom du bouton
        await cartPage.verifyNameButton();

        //vider le panier
        await cartPage.clickRemove();



    }

);