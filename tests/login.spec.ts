import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';


test('TC_LOGIN_001 - Connexion avec des identifiants valides', async ({ page }) => {

    // Création de notre Page Object
    // et transmission de la page Playwright
    const loginPage = new LoginPage(page);


    // Ouvrir SauceDemo
    await loginPage.open();


    // Se connecter
    await loginPage.enterCredentials(
        'standard_user',
        'secret_sauce'
    );
    //saisir login et mdp
    await loginPage.verifyUsername(
        'standard_user'

    );
    //appuyet sur le bouttn login
    await loginPage.clickLogin();


    // Vérifier que nous sommes arrivés
    // sur la page Products
    await expect(
        page.getByText('Products')
    ).toBeVisible();

});