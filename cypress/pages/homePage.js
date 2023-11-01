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

    getNotebookCategory() {
        return cy.get(notebookCategory);
    }

    getCart() {
        return cy.get(cart);
    }
}