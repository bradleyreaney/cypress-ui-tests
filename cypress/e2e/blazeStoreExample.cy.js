/// <reference types="cypress" />

import CartPage from "../pages/cartPage";
import HomePage from "../pages/homePage";
import LaptopPage from "../pages/laptopsPage";

const homePage = new HomePage();
const laptopPage = new LaptopPage();
const cartPage = new CartPage();

const specOptions = {
    product: 'MacBook air',
    orderName: 'Brad',
    orderCountry: 'United Kingdom',
    orderCity: 'Sheffield', 
    orderCard: '4444000000000001', 
    orderMonth: '12', 
    orderYear: '30',
}

describe('Example using the demo blaze site', () => {
    it('should open the demo blaze store home page', () => {
        homePage.openBlazeStoreHomePage();
        homePage.getBrandTitle().should("include.text", 'PRODUCT STORE');
    })

    it('should open the laptop category and select a product', () => {
        homePage.openNotebookCategory();
        laptopPage.selectLaptop(specOptions.product);
        laptopPage.addLaptopToCart();
    })

    it('should open the cart and place the order', () => {
        homePage.openCart();
        cartPage.clickPlaceOrderButton();
        cartPage.completeOrderForm(specOptions);
        cartPage.confirmOrderFormCompletion();
    })
})