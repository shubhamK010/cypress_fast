
describe('various ways to switch tab to cypress', function () {

    //removing the attribute value
    it('1st way of handling the tab switching ', () => {

        cy.visit('https://webdriveruniversity.com/')
        cy.get("#contact-us").invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'Contact-Us')




    })

    //updating the attribute value 
    it('2nd way of handling the tab switching ', () => {

        cy.visit('https://webdriveruniversity.com/')
        cy.get("#contact-us").invoke('attr', 'target', '_self').click()
        cy.url().should('contain', 'Contact-Us')


    })

    //retrieving the attribute value and appending with the base url
    it('3rd way of handling the tab switching ', () => {

        cy.visit('https://webdriveruniversity.com/')
        cy.get("#contact-us").invoke('attr', 'href',).then(function (resource) {
            // cy.log(resource)
            cy.visit(`https://webdriveruniversity.com/${resource}`)
        })
        cy.url().should('contain', 'Contact-Us')

    })

})

//url pe click karne ke baad ek window pop up hoti hai means naya chrome browser open hota hia(naya tab nahi),usme hume window ki value set karni padti hai
//means pehle usko retrive karna padta phir select karna padta

//url click===> win.location


