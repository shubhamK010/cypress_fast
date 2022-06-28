import {Login} from '../../integration/pageObjectModels/login'

const login = new Login()


describe('test scenario for login functionality',function(){

    beforeEach(function(){
        login.navigate()

    })

    
    

    it('verify the login with valid credentials',function(){
        
        login.login("Admin","admin123")


    })

    it('verify the login with invalid credentials',function(){
        
        login.login("Admi","admin12")
        login.validateInvalidLogin()

        
    })

    it('verify the visibility for logo',function(){
        
        login.validateLogoIsVisible()

        
    })

    it('verify the visibility for forgot password',function(){
        
        login.validateVisibilityforForgetPassword()

        
    })


})
