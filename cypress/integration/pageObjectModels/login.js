export class Login{

    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')

    }

    login(username,password){

        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
        return this
    }

    validateInvalidLogin(){

        cy.get('#spanMessage').should('have.text','Invalid credentials')
        return this
    
    }

    validateLogoIsVisible(){

        cy.get('#divLogo').should('be.visible')
        return this

    }

    validateVisibilityforForgetPassword(){

        cy.get('a[href="/index.php/auth/requestPasswordResetCode"]')
        .should('be.visible')
        .should('have.text','Forgot your password?')
        return this

    }

    
}