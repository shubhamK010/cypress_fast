describe('verify the  delete functionality',function(){
    let token = "745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"
    it('verify the delete user functionality',function(){

        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response.)
             expect(response.status).to.eqls(200)
             expect(response.body.length).to.eqls(20)
             return response.body[0].id

        }).then(function(id){
            cy.request({
                method:"DELETE",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(function(response){
                expect(response.status).to.eqls(204)
            })

        })



    })

})
//Important ====>
// PUT--- update 
// PATCH --- particular field