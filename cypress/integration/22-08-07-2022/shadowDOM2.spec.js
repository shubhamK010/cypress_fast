// http://127.0.0.1:5501/index.html

// https://books-pwakit.appspot.com/


describe('TS-01 verify the shadow DOM element',function(){

    it('TC-01 verify the shadow DOM element text',function(){

        cy.visit('http://127.0.0.1:5500/cypress/integration/22-08-07-2022/index.html')
        cy.get('button').click()
        cy.get('#shadowHost').shadow().find('#name').type('hello')
        // cy.get('#name').type('hello')      //we get element not found 
    })

    it.only('TC-02 verify the shadow DOM element text in book app ',function(){

        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app').shadow().find('app-toolbar').find('input#input').type('wings of fire')
       
    })
})