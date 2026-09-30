// On importe Page et Locator depuis Playwright
import { Page, Locator, expect } from '@playwright/test';


export class LoginPage {

    // =========================
    // ATTRIBUTS
    // =========================

    // La page du navigateur
    readonly page: Page;

    // Les éléments de la page Login
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;


    // =========================
    // CONSTRUCTEUR
    // =========================

    constructor(page: Page) {

        // On récupère la page fournie par le test
        this.page = page;

        // On initialise nos locators
        this.usernameInput =
            page.getByPlaceholder('Username');

        this.passwordInput =
            page.getByPlaceholder('Password');


        this.loginButton =
            page.getByRole('button', { name: 'Login' });
    }


    // =========================
    // MÉTHODES
    // =========================

    // Ouvrir SauceDemo
    async open() {

        await this.page.goto(
            'https://www.saucedemo.com/'
        );
    }


    async enterCredentials(username: string, password: string) {

    // Saisir le username
    await this.usernameInput.fill(username);

    // Saisir le password
    await this.passwordInput.fill(password);
}

    async verifyUsername(username: string) {

    // Vérifier la valeur saisie AVANT le clic
    await expect(this.usernameInput)
        .toHaveValue(username);
}

async clickLogin() {

    // Cliquer sur Login
    await this.loginButton.click();
}
}