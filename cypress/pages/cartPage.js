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
                 .get(purchaseConfirmationOk)
    }

    clickPlaceOrderButton() {
        this.getPlaceOrderButton()
            .click()
    }

    completeOrderForm(orderName, orderCountry, orderCity, orderCard, orderMonth, orderYear) {
        this.getOrderName().type(orderName).should('have.value', orderName)
        this.getOrderCountry.type(orderCountry).should('have.value', orderCountry)
        this.getOrderCity.type(orderCity).should('have.value', orderCity)
        this.getOrderCreditCard.type(orderCard).should('have.value', orderCard)
        this.getOrderMonth.type(orderMonth).should('have.value', orderMonth)
        this.getOrderYear.type(orderYear).should('have.value', orderYear)
        cy.get(purchaseButton).click()
    }
             
    confirmOrderFormCompletion() {
        this.getPurchaseConfirmationMessage()
            .should('include.text', 'Thank you for your purchase!');
        this.clickPlaceOrderButton()
            .click();
    }
}