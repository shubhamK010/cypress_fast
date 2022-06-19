/// <reference types="cypress"/>

describe('verify the GET api', function () {

    //token
    let token = "745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"
    
    it('verify the GET api', function () {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorisation': 'Bearer ' + token
            }
        }).then(function (res) {
            expect(res.status).to.equal(200)
            expect(res.body).to.have.length(20)


        })

    })

    let obj={name:"Tenaliaa Ramakrishna", 
    gender:"male", 
    email:`tenali.${Math.random()*6}raaaamakrishna@15ce.com`, 
    status:"inactive"}

    

    it('verify the POST api', function () {
        cy.request({
            method: 'POST',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: obj
        }).then(function (res) {
            expect(res.status).to.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body.email).to.equal(obj.email)
            expect(res.body.gender).to.equal(obj.gender)
            expect(res.body.status).to.equal(obj.status)
            expect(res.body.name).to.equal(obj.name)
        })

    })

    it('verify the PUT api', function () {
        cy.request({
            method: 'PUT',
            url: "https://gorest.co.in/public/v2/users/13",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: obj
        }).then(function (res) {
            expect(res.status).to.equal(200)
            expect(res.body.email).to.equal(obj.email)
            expect(res.body.gender).to.equal(obj.gender)
            expect(res.body.status).to.equal(obj.status)
            expect(res.body.name).to.equal(obj.name)
        })

    })

    it('verify the DELETE api', function () {
        cy.request({
            method: 'DELETE',
            url: "https://gorest.co.in/public/v2/users/3901",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            
        }).then(function (res) {
            expect(res.status).to.equal(204)
         
        })

    })





})

//GET -PUT=200
//POST=201
//DELETE=204
//Authentication failed=401
// wrong url=402
//not allowed=403
//server timeout=503

