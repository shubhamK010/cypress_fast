import { ForgotPassword } from "../pageObjectModels/forgotPassword";

const forgotPass = new ForgotPassword()

describe('validate forgot password page',function(){

    beforeEach(function(){
        forgotPass.navigate()

    })

    it('validate logo',function(){
        forgotPass.validateLogo()


    })

    it('validate text',function(){
        forgotPass.validateText()

        
    })

    it('validate reset button',function(){
        forgotPass.validateResetPasswordButton('Admin')

        
    })

    it('validate cancel button',function(){
        forgotPass.validateCancelButton()

        
    })
})
