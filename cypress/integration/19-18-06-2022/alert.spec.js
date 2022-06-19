describe('javascript alerts in cypress',function(){

    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })


    it('verify the javascript alerts in cypress',function(){
        cy.on('window:alert',function(str){
            expect(str).to.eqls('I am a JS Alert')
        })
        
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('be.visible')
        .and('have.text','You successfully clicked an alert')

    })

    it('verify the javascript alert confirm with OK in cypress',function(){
        cy.on('window:confirm',function(str){
            expect(str).to.equal('I am a JS Confirm')
            
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible')
        .and('have.text','You clicked: Ok')
        
        
    })

    it('verify the javascript alert confirm with Cancel in cypress',function(){
        cy.on('window:confirm',function(str){
            expect(str).to.equal('I am a JS Confirm')
            
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible')
        .and('have.text','You clicked: Cancel') 
        
        
    })

    it.only('verify the javascript alert prompt with text in cypress',function(){
        cy.window().then(function(obj){
            cy.stub(obj,'prompt').returns('Hello I am Shubham')
            
            
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('be.visible')
        .and('have.text','You entered: Hello I am Shubham') 
        
        
        
    })

    it.only('verify the javascript alert prompt with null in cypress',function(){
        cy.window().then(function(obj){
            cy.stub(obj,'prompt').returns(null)
            
            
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('be.visible')
        .and('have.text','You entered: null') 
        
        
        
    })






})