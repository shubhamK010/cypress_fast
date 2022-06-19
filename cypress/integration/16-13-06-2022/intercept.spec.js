describe('verify the intercept call', function () {
    it('verify the getComment functionality', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est')
    })
    
    it('verify the getComment functionality', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function (rs) {
            return rs.response.body.body
        }).then(function (comment) {
            cy.get('.network-comment').should('have.text', comment)

        })
    })
})