

describe('veriy the login functionality',function(){
    it('verify the login functionality',function(){
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()

        cy.login('Admin','admin123')
        cy.get('h1')
        .should('be.visible')
        .should('have.text','Dashboard') 
    })

    it('verify the login functionality',function(){
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()

        cy.login('Admin','admin12')
        cy.get('#spanMessage')
        .should('be.visible')
        .and('have.text','Invalid credentials')
        
        
    })


})