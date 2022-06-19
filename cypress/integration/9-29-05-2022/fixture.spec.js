// fixture file used to store the test data

describe('verify the contact us form',function(){

    let data={
        firstName:"pravin",
        lastName:"shelar",
        email:"pravinshelar010@gmail.com",
        message:"i am working in pharma"
    }




    //retriving values from object 

    it('Testcase one with test data set one',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('pravin')
        cy.get('input[name="last_name"]').type('shelar')
        cy.get('input[name="email"]').type('pravinshelar010@gmail.com')
        cy.get('textarea[name="message"]').type('i am working in pharma')
        cy.get('input[value="SUBMIT"]').click()
    })
    //we used fixture for particular testcase
    it('Testcase one with test data set two',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstName)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[value="SUBMIT"]').click()
    })

    //we used fixture thorughout test case
    it('Testcase one with test data set three using fixture',function(){
        cy.fixture('contactus').then(function(data){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[value="SUBMIT"]').click()
            

        })
        
    })
})