describe('verify the login functionality',function(){

    it.only('verify the login functionality',function(){

        cy.visit('/search?q=react')


    })

    it.only('verify the login functionality',function(){
        
        // to read theUrl from cypress.json
        // let Url=Cypress.config().baseUrl  
        // cy.visit(Url)

        cy.visit('/search?q=cypress')


    })

    it.only('verify the login functionality',function(){
            let url = Cypress.config().baseUrl
            cy.visit(url)
    })



})