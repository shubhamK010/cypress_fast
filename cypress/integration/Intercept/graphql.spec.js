// describe('verify the todo completion',function(){
//     it('verify the task',function(){
//         cy.visit('http://localhost:1234/')
//         cy.get('input[type="checkbox"]').first().click()
//         cy.get('input[type="checkbox"]').closest('li').should('have.class','completed')
//         //yaha pe complted class laga hua hai matalb agar test runner me isko run karte hai to ke baar ye check hoga ek baar nahi hoga phir agli baar check hoga,aisa lternative
//         //matlab hum ek baar click karte hai to yeh chalega,dusri baar click karte hai to ye uncheck hoga isliye nahi chalega
//     })
// })

//ab isko condition based banan hai
describe('verify the todo completion',function(){
    it('verify the task',function(){
        cy.visit('http://localhost:1234/')
        cy.get('input[type="checkbox"]').closest('li').as('checkbox')
        //hum yaha click karne se pehle class name check karenge
        cy.get('@checkbox').invoke('attr','class').then(function(str){
            if(str.includes('completed')){
                cy.get('input[type="checkbox"]').closest('li').should('have.class','completed')
                
            }
            else{
                cy.get('input[type="checkbox"]').first().click()
                cy.get('input[type="checkbox"]').closest('li').should('have.class','completed')
            }
        })
        
    })
})
