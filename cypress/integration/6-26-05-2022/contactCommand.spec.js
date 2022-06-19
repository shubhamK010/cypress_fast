//contact us form
describe('verify the contact us form along with navigation',function(){

    it('verify the contact us form',function(){
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.eql('CONTACT US')
        })
        
        cy.validateContactUs("shubham","kamble","shubhamkmb@gmail.com","i am learning Science")
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it('verify the contact us form reset functionality',function () {
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.eql('CONTACT US')
        })
        cy.validateContactUs("shubham","kamble","shubhamkmb@gmail.com","learning Science")
        cy.get('input[value="RESET"]').click()
        cy.validateContactUs(" "," "," "," ")
    })


    it('verify the contact us form', function(){
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.eql('CONTACT US')
        })
       cy.validateContactUs("shubham","kamble","shubhamkmbgmail.com","learning Science")
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain', 'Invalid')
    })
    it.only('verify the contact us form', function () {
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.eql('CONTACT US')
        })
        
        cy.validatecontactus ("shubham","kamble","shubhamkmb@gmail.com",'{backspace}')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').contains('all fields are required')

        // cy.get('html').should('have.text', 'Error: all fields are required')
    })
})