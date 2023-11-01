/// <reference types="cypress" />

const addToCart = ".col-sm-12 > .btn"

export default class LaptopPage {

    getAddToCart() {
        return cy.get(addToCart);
    }

    selectLaptop(specOptions) {
        return cy.contains(specOptions.laptopName)
            .should('be.visible')
    }
}