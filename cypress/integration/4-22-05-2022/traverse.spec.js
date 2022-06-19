///<reference types="cypress"/>

describe('traverse methods in cypress',function(){
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().should('have.length',3)
    })

    it('To get the first DOM element within elements, use the .first() command..',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().first().should('have.text',"Home")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().first().should('contain',"Home")

        //Important==>
        //'Home '====> have.text ye exact match dekhta hai(yaha Home ke baad jo space wo bhi bilkul waisa hi hona chahiye..matlab exact match ke liye have.text dekhna padta hai)
        //         =====> contains ye sub string dekhta hai matlab exact match nahi dekhta(bus thode similar letters hone chaihiye)

    })
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().last().should('have.text',"Contact Us")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().last().should('contain',"Contact Us")
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(0).should('contain',"Home")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(1).should('contain',"About Us")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(2).should('contain',"Contact Us")
    })

    //siblings


    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-job-list"]').children().should('have.length',2)
        cy.get('ul[class="traversal-job-list"]').children().eq(0).next().should('contain',"Technology")
       
      
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-job-list"]').children().eq(1).should('contain',"Finance")
       
      
    })

    
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-job-list"]').siblings().should('have.length',5)
       
      
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Finance').nextAll().should('have.length',2)
       
      
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Sales').prevAll().should('have.length',2)
       
      
    })
    it('To get all of the next sibling DOM elements within elements until another element, use the',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length',5)
       
      
    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
       
      
    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Sales').prevUntil('Finance').should('have.length',2)
       
      
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').not('[disabled]').should('have.length',7)
       
      
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').filter('[disabled]').should('have.attr','value',"cabbage")
       
      
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-drinks-list"]').find("#espresso").should('have.text',"Espresso")
       
      
    })

    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.attr','class',"traversal-drinks-list")
       
      
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.attr','class',"traversal-drinks-list")
       
      
    })
































    

})