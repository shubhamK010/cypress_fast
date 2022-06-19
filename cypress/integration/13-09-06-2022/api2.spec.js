describe('verify the reqres api', () => {



    it('verify the get api', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eqls(200)
        })

    })
    it('verify the post api', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            expect(response.status).to.eql(201)
        })

    })
    it.only('verify the put api', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }

        }).then(function ({ status, duration }) {
            expect(status).to.eqls(200)
            expect(duration).to.be.lessThan(4000)
        })

    })


    it('verify the put api', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }

        }).then(function ({ body: { job } }) {
            expect(job).to.eqls("zion resident")

        })

    })
    it('verify the delete api', function () {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        }).then(function ({ status }) {
            expect(status).to.eql(204)

        })

    })

    it.only('verify the api with gorest authentication create user POST', function () {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer 745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"


            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `${Math.random() * 12}tenali.ramakrishna@15ce.com`,
                "status": "active"
            }
        }).then(function (response) {
            expect(response.status).to.equal(201)
        })

    })
    it.only('verify the api with gorest authentication  user GET', function () {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer 745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"

            },

        }).then(function (response) {
            expect(response.status).to.equal(200)
        })

    })

    it.only('verify the api with gorest authentication  user PUT', function () {

        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/2",
            headers: {
                Authorization: "Bearer 745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"

            },
            body: {
                "name": "Allasani Peddana",
                "email": `${Math.random() * 12}alli.peddana@15ce.com`,
                "status": "active"
            }
        }).then(function (response) {
            expect(response.status).to.equal(200)
        })

    })



    it.only('verify the api with gorest authentication  user DELETE', function () {

        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/2",
            headers: {
                Authorization: "Bearer 745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"

            },

        }).then(function (response) {
            expect(response.status).to.equal(204)
        })

    })
})