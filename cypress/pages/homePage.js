/// <reference types="cypress" />

const brandTitle = '.navbar-brand';
const notebookCategory = `[onclick="byCat('notebook')"]`;
const cart = '#cartur';

export default class HomePage {
    openBlazeStoreHomePage() {
        cy.visit('/');
    }

    getBrandTitle() {
        return cy.get(brandTitle);
    }

    openNotebookCategory() {
        cy.get(notebookCategory).click()
    }

    openCart() {
        cy.get(cart).click()
    }
}