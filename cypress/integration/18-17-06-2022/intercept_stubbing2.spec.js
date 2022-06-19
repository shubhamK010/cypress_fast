describe('verify the intercept concept and functionality', function () {


    it('verify the intercept concept and functionality', function () {
        cy.intercept({
            method: 'GET',
            url: "http://jsonplaceholder.typicode.com/posts"
        }).as('getUser')

        cy.visit('http://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getUser').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.have.length(100)

        })
    })
    //now we are overriding the above response
    //means we want to see only one user from 100 users
    //khudka response dalo

    it('verify the intercept concept and functionality', function () {
        cy.intercept({
            method: 'GET',
            url: "http://jsonplaceholder.typicode.com/posts"
        }, {

            message: "this second test case run succesfullly"  //ye msg page pe dikhega though it shows error

        }).as('getUser')

        cy.visit('http://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getUser').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)


        })
    })

    //ab stubbing ka data fixture file se le lenge
    //means intercept ko hum fixture ke sath use kar sakte

    it('verify the intercept concept and functionality', function () {
        cy.fixture('userStub2')
            .then(function (users) {
                cy.log(users)
                cy.intercept({
                    method: 'GET',
                    url: "http://jsonplaceholder.typicode.com/posts"
                }, users).as('getUser')

                cy.visit('http://jsonplaceholder.typicode.com/')
                cy.get('a[href="/posts"]').first().click()
                cy.wait('@getUser').then(function ({ request, response }) {
                    expect(response.statusCode).to.eq(200)
                    

                })
            })

    })

    //     cy.intercept({
    //         method: 'GET',
    //         url: "http://jsonplaceholder.typicode.com/posts"
    //     }).as('getUser')

    //     cy.visit('http://jsonplaceholder.typicode.com/')
    //     cy.get('a[href="/posts"]').first().click()
    //     cy.wait('@getUser').then(function ({ request, response }) {
    //         expect(response.statusCode).to.eq(200)
    //         expect(response.body).to.have.length(100)

    //     })
    // })
})


