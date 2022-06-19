//contact us form
describe('verify the contact us form along with navigation',function(){

    it('verify the contact us form',function(){
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.eql('CONTACT US')
        })
        //expect(str).to.eql('CONTACT US')
        //cy.get('#contact-us').click() (it will not work)...ye kam nahi karega
        cy.get('input[name="first_name"]').type('shubham')
        cy.get('input[name="last_name"]').type('kamble')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
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
        //expect(str).to.eql('CONTACT US')
        //cy.get('#contact-us').click() (it will not work)..ye kam nhi karta
        cy.get('input[name="first_name"]').type('shubham')
        cy.get('input[name="last_name"]').type('kamble')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="RESET"]').click()
        cy.get('input[name="first_name"]').should('have.text', "")
        cy.get('input[name="last_name"]').should('have.text', "")
        cy.get('input[name="email"]').should('have.text', "")
        cy.get('textarea[name="message"]').should('have.text', "")

    })


    it('verify the contact us form', function(){
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.eql('CONTACT US')
        })
        //expect(str).to.eql('CONTACT US')
        //cy.get('#contact-us').click() (it will not work)
        cy.get('input[name="first_name"]').type('shubham')
        cy.get('input[name="last_name"]').type('kamble')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
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
        //expect(str).to.eql('CONTACT US')
        //cy.get('#contact-us').click() (it will not work) ....ye kam nahi akrega
        cy.get('input[name="first_name"]').type('shubham')
        cy.get('input[name="last_name"]').type('kamble')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain', 'all fields')
    })
})