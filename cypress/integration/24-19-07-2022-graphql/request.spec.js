
describe('verify the graphql api', function () {
    it('verify allToDo', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "allTodos",
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                vaiables: {}

            }
            }).then(function(res){
                cy.log(res.body.data.allTodos.length) 
                expect(res.status).to.eql(200)
                expect(res.body.data.allTodos.length) .to.eql(3)
        })

    })

    it('verify addToDo', function () {

    })

    it('verify updateToDo', function () {

    })

    it('verify deleteToDo', function () {

    })

})