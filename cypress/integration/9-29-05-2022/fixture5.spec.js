describe('verify the functionality for contact us',function(){
    beforeEach(function(){
        cy.fixture('contactus').then((data)=>{
            this.data=data
        })
    })

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.firstName)
        cy.get('input[name="last_name"]').type(this.data.lastName)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.message)
        cy.get('input[value="SUBMIT"]').click()


    })
})