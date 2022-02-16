/// <reference types="cypress" />

const { delay } = require("cypress/types/bluebird")

describe('Example using the demo blaze site', () => {
    it('should open the demo blaze store home page', () => {
        cy.visit('https://www.demoblaze.com/')

        cy.get(`[onclick="byCat('notebook')"]`).click()

        cy.contains('MacBook air')
            .should('be.visible')
            .click()

        cy.url()
            .should('include', 'prod')

        cy.get('.col-sm-12 > .btn')
            .should('have.text', 'Add to cart')
            .click()

        cy.get('#cartur').click()

        cy.get('.col-lg-1 > .btn')
            .should('have.text', 'Place Order')
            .click()

        cy.get('#name')
            .type('Brad', { delay: 50 }) //broke!
            .should('have.value', 'Brad')

        cy.get('#country')
            .type('United Kingdom')
            .should('have.value', 'United Kingdom')

        cy.get('#city')
            .type('Sheffield')
            .should('have.value', 'Sheffield')

        cy.get('#card')
            .type('1234000000000001')
            .should('have.value', '1234000000000001')

        cy.get('#month')
            .type('12')
            .should('have.value', '12')

        cy.get('#year')
            .type('30')
            .should('have.value', '30')

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary') //Purchase
            .click()

        cy.get('.sweet-alert > h2')
            .should('include.text', 'Thank you for your purchase!')

        cy.wait(500)
            .get('.confirm')
            .click()

        cy.url()
            .should('include', 'index')
    })
})