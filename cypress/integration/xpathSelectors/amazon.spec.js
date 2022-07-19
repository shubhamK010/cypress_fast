describe('verify the xpath functionality on amazon site',function(){
    it('verify the xpath functionality on amazon site',function(){
        cy.visit('https://www.amazon.in/')
        //cy.xpath('//input[@id="twotabsearchtextbox"]')  //here we must use @ before the id because it is the syntax of the xpath
        // cy.xpath('//a[text()="Press Releases"]').click()    //also we have used the double slash before tag it is the syntax of xpath  //text() is method in xpath
        cy.xpath('//input[@id="twotabsearchtextbox"]').type('oneplus')
        // cy.xpath('//div[@class="s-suggestion s-suggestion-ellipsis-direction" ]//span[contains(text()," bullets wireless z++")]').click()
        //                        //or//
        cy.xpath('//div[@class="s-suggestion s-suggestion-ellipsis-direction" and contains(text(),"oneplus") ]//span[contains(text()," bullets wireless z++")]').click()       //and is used here 

        
    })

})