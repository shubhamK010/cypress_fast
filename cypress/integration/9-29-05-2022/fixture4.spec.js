//problem statement==>different set of data ekach test case madhe run hotoy 
// pan aplyala wegweglya test case pahijet different set of data sathi
//mhanjech aplyala 3 wegwegle 'it' block chalvayche ahet
//agar ek test case koi particular set of data ke sath fail hoti hai,to hume kiske sath fail ho gayi ye pata nahi chalega

import data from '../../fixtures/contactusmultiple.json'

describe('Verify the contact us form with multiple test case', function () {
    data.forEach(function(info,index){
        it(`verify the contact us with data set- ${index + 1}`, function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.message)
            cy.get('input[value="SUBMIT"]').click()

        })
    })
})

//agar ek test case koi particular set of data ke sath fail hoti hai,to hume kiske sath fail ho gayi ye pata nahi chalega
//lekin is wale pe huamara problem solve hota hai,kyuki ye 3 block alag chal rahe hai
















