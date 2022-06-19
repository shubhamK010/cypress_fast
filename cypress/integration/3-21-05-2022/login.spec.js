/// <reference types="cypress"/>

describe('validate the login functionality', function () {
    it('verify the login functionality with valid credentials', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#divUsername > .form-hint').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible')


    })

    it('verify the login functionality with invalid credentials', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#divUsername > .form-hint').type('Admin')
        cy.get('#txtPassword').type('admin125')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible')

    })
})






























