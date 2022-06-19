describe('verify the PUT request', function () {
    let token = "745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"

    it('verify the user creation', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `tenali.ramakrishna@15${Math.floor(Math.random() * 600)}ce.com`,
                "status": "active"
            }

        }).then(function ({ status, body }) {
            expect(status).to.equal(201)
            expect(body).to.have.property('id')
            return body.id
        }).then(function (id) {
            //cy.log(id)
            // update user

            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: {
                    "name": "Allasani Peddana",
                    "email": "allasani.peddana@15ce.com",
                    "status": "inactive"         //ithe 'inactive' manually type kele ahe
                }
            }).then(function({status,body}){
                expect(status).to.eql(200)
                expect(body.status).to.eqls('inactive')
            })
        })

    })
    //agar ye put wali test case second time run karne dekhoge to error aa jayega



})