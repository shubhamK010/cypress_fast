//now i have to use fixture file thorughout the testcase

describe('verify the contact us form',function(){

    let data;
    before(function(){
        cy.fixture('contactus2').then((dataset)=>{
            data=dataset

        })
    })

    //pura test case read hona chahte ho to yeh likho

    it('Testcase one with test data set one',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[0].firstName)
        cy.get('input[name="last_name"]').type(data[0].lastName)
        cy.get('input[name="email"]').type(data[0].email)
        cy.get('textarea[name="message"]').type(data[0].message)
        cy.get('input[value="SUBMIT"]').click()
    })

    it('Testcase one with test data set one',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[1].firstName)
        cy.get('input[name="last_name"]').type(data[1].lastName)
        cy.get('input[name="email"]').type(data[1].email)
        cy.get('textarea[name="message"]').type(data[1].message)
        cy.get('input[value="SUBMIT"]').click()
    })
    

    
})