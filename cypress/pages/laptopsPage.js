/// <reference types="cypress" />

export default class LaptopPage {

    getAddToCart() {
        return cy.get('.col-sm-12 > .btn')
                 .should('have.text', 'Add to cart')
    }
    
    selectLaptop(laptopName) {
        cy.contains(laptopName)
            .should('be.visible')
            .click()
        cy.url()
            .should('include', 'prod')
    }

    addLaptopToCart() {
        this.getAddToCart()
            .click()
    }
}