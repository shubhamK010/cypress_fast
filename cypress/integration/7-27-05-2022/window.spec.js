
describe('verify the window command in cypress',function(){
    it('verify the various window command for reload page,forward,back via js',function(){
        cy.login('Admin','admin123')
        
        cy.window().then(function(win){
            win.location.reload()
        })
        
        cy.window().then(function(win){
            win.history.forward()
            win.history.back()
        })

        cy.window().then(function(win){
            expect(win.location.href).to.eqls('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        })



    })

    it('verify the various window command for reload page,forward,back via cypress',function(){
        cy.login('Admin','admin123')
        cy.reload()
        cy.go(1)
        cy.go(-1)
        cy.url().should('contain','open')










    })
})