describe('verify the action class in cypress',function(){
    it('verify the drag and drop action in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        //1 for left//2 for middle//3 for right
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true})
        //now validation...yeh test case complete hone ke liye lagta hai
        cy.get('#droppable>p>:nth-child(1)').should('have.text',"Dropped!")
        //now we have to change color
        cy.get('#droppable').find('p').should('have.attr','style',
        'background-color: rgb(244, 89, 80); height: 100%;')


        
    })
    //beofre and after double click
    it('double click in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').as('clickable')
        cy.get('@clickable').should('have.class','div-double-click')//before doiuble click
        cy.get('@clickable').dblclick()
        cy.get('@clickable').should('have.class','div-double-click double')//after double click
     
    })
   //page load hone par action=scroll karna hai
    it('scroll into view in cypress',function(){
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Actions')
    })

    it.only('Hover on button cypress',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.contains('Hover Over Me First!').trigger('mouseover',{force:true})
        cy.contains("Link 1").click({force:true})
        //element DOM me haipar wo applicable position pe nahi hai isliye {force:true} dalna padta


        
    })


})