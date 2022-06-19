describe('verify the intercept call', function () {
    //for Post Comment Button
    it('verify the POST request using cy.intercept', function () {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",

        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        // cy.wait('@postComment').its('response.statusCode').should('be.oneOf', [200, 201])
        cy.wait('@postComment').then(function ({ response, request }) {
            // cy.log(response)
            // cy.log(request)

            //validate for request
            expect(request.method).to.eqls('POST')
            //validate for response
            expect(response.statusCode).to.eqls(201)  //ye api ka response nahi hai.. jo intercept se request gayi thi na uska response hai
            cy.log(response.body)
            expect(response.body).to.have.keys(["name", "email", "body", "id"])

        })
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text', 'POST successful!')






    })

    //for Update Comment Button
    it('verify the PUT request using cy.intercept', function () {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }).as('updateComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        // cy.wait('@postComment').its('response.statusCode').should('be.oneOf', [200, 201])
        cy.wait('@updateComment').then(function ({ response, request }) {
            // cy.log(response)
            // cy.log(request)

            //validate for request
            expect(request.method).to.eqls('PUT')
            //validate for response
            expect(response.statusCode).to.eqls(200)  //ye api ka response nahi hai.. jo intercept se request gayi thi na uska response hai
            cy.log(response.body)
            expect(response.body).to.have.keys(["name", "email", "body", "id"])

        })

    })

    //stubbing

    it.only('verify the getComment functionality to learn stubbing', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }, {
            statusCode: 404,
            body: {

                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "Hello,I am learnign intercept",
                "skill": "Swimming"

            }


        }


        ).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function (response) {
            cy.log(response.body)
        })
        cy.get('.network-comment').should('contain', 'Hello,I am learnign intercept')
    })
})