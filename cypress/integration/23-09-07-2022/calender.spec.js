describe('verify the calender and date functionality', function () {
    it('verify the calender and date functionality', function () {
        // cy.visit('http://webdriveruniversity.com/Datepicker/index.html')

        // let date =new Date()
        // cy.log(date.getDate())
        // cy.log(date.getMonth())
        // cy.log(date.getFullYear())

        //500 days from today===> 
        // Wednesday, 22 November, 2023

        let date2 = new Date()
        date2.setDate(date2.getDate() + 500)
        let futuredate = date2.getDate()
        // let month=date2.getMonth()
        let year = date2.getFullYear()
        let wordMonthLong = date2.toLocaleString("default", { month: 'long' })
        // let wordMonthShort = date2.toLocaleString("default",{month:'short'})

        // cy.log(wordMonthLong)
        // cy.log(wordMonthShort)

        // cy.log(newdate)
        // cy.log(month)
        // cy.log(year)








        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndYear() {
            cy.get('.datepicker-switch').first().then(function (el) {

                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }

            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (el) {

                    if (!el.text().includes(wordMonthLong)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }

                })
            })
        } 
        

        function selectFutureDate(){
            cy.contains(futuredate).click()
        }

        selectMonthAndYear()
        selectFutureDate()




    })
})