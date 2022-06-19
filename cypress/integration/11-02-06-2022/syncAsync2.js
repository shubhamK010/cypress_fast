
describe('Verify the async and sync in cypress', function () {

    it('verify the sync functionality', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]').should('have.text', 'CONTACT US')
        console.log('hello')


    })

    it('verify the sync functionality', function () {


        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
            .should('have.text', 'CONTACT US')
            .then(function () {
                console.log('hello')
            })


    })


    it('verify the sync functionality', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
            .should('have.text', 'CONTACT US')
        cy.log('hello')
    })


    it('verify the  element implicit assertion', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
            .should('have.text', 'CONTACT US')
        cy.log('hello')
    })




    it.only('verify the  element explicit', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]').then(function (el) {
            expect(el.text()).to.eql('CONTACT US')
        })

    })

})
//Important statement==> every cypress commands a promise
