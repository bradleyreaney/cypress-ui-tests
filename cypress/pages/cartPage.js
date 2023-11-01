/// <reference types="cypress" />

const placeOrderButton = '.col-lg-1 > .btn';
const orderName = '#name';
const orderCountry = '#country';
const orderCity = '#city';
const orderCard = '#card';
const orderMonth = '#month';
const orderYear = '#year';
const purchaseButton = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
const purchaseConfirmation = '.sweet-alert > h2';
const purchaseConfirmationOk = '.confirm';

export default class CartPage {

    getPlaceOrderButton() {
        return cy.get(placeOrderButton)
            .should('have.text', 'Place Order');
    }

    getOrderName() {
        return cy.get(orderName);
    }

    getOrderCountry() {
        return cy.get(orderCountry);
    }

    getOrderCity() {
        return cy.get(orderCity);
    }

    getOrderCreditCard() {
        return cy.get(orderCard);
    }

    getOrderMonth() {
        return cy.get(orderMonth);
    }

    getOrderYear() {
        return cy.get(orderYear);
    }

    getPurchaseConfirmationMessage() {
        return cy.get(purchaseConfirmation);
    }

    getPurchaseConfirmationOk() {
        return cy.wait(500)
            .get(purchaseConfirmationOk);
    }

    completeOrderForm(specOptions) {
        cy.wait(1000);
        this.getOrderCountry().type(specOptions.orderCountry).should('have.value', specOptions.orderCountry)
        this.getOrderName().type(specOptions.orderName).should('have.value', specOptions.orderName)
        this.getOrderCity().type(specOptions.orderCity).should('have.value', specOptions.orderCity)
        this.getOrderCreditCard().type(specOptions.orderCard).should('have.value', specOptions.orderCard)
        this.getOrderMonth().type(specOptions.orderMonth).should('have.value', specOptions.orderMonth)
        this.getOrderYear().type(specOptions.orderYear).should('have.value', specOptions.orderYear)
        cy.get(purchaseButton).click();
    }

    confirmOrderFormCompletion() {
        this.getPurchaseConfirmationMessage()
            .should('include.text', 'Thank you for your purchase!');
        this.getPurchaseConfirmationOk()
            .click();
    }
}