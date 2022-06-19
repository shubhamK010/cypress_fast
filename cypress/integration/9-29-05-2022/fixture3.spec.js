describe('verify the contactus form with multiple data', function () {

    it('verify the contactus form with multiple data', function () {
        cy.fixture('contactusmultiple').then(function (data) {
          

            data.forEach(info => {

                cy.log(info)
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(info.firstName)
                cy.get('input[name="last_name"]').type(info.lastName)
                cy.get('input[name="email"]').type(info.email)
                cy.get('textarea[name="message"]').type(info.message)
                cy.get('input[value="SUBMIT"]').click()

            })

        });
    })
})

// yaha pe upar ek hi test case different test of data ke sath baar baar run ho rhio,lekin ye sahi tarika nahi hai
//hume yeh nahi chahiye
//isliye ek fixture file ko alag tarike se use karna padega

