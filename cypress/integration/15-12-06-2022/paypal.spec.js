
// let clientID='AZNxP7sBTpm-b37RkjpkawWhpOfHXzJX8AVxqh5Aa4vG6hWvqoP0jIm-du8_GGJbUcELvJbqsnKtLaWl'
// let secretID='EMKR1mIvveeHOjTJwNEWRmQKaZwgITtVjr6_Ox9WY2rpszuakUvqOpxZIDWNjqaxavg9LgAtya1reW0U'


describe('verify the paypal api for generate token',function(){
    it('verify the token api',function(){
        let token;
        cy.request({
            method:'POST',
            url:'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers:{
                Authorization:'Basic QVpOeFA3c0JUcG0tYjM3UmtqcGthd1docE9mSFh6Slg4QVZ4cWg1QWE0dkc2aFd2cW9QMGpJbS1kdThfR0dKYlVjRUx2SmJxc25LdExhV2w6RU1LUjFtSXZ2ZWVIT2pUSndORVdSbVFLYVp3Z0lUdFZqcjZfT3g5V1kycnBzenVha1V2cU9weFpJRFdOanFheGF2ZzlMZ0F0eWExcmVXMFU=',
                content_Type:'application/x-www-form-urlencoded'
    
            },
            body:{
                grant_type:'client_credentials'
    
            },
            form:true      // hum ye form:true bhej rahe hai kyuki humne postman me ek radio button set kiya hai body me==> x-www-form-urlencoded
        }).then(function(response){
            // cy.log(response)
            expect(response.status).to.equal(200)
            token=response.body.access_token

        }).then(function(){
            // cy.log(token)
            cy.request({
                method:'GET',
                url:'https://api-m.sandbox.paypal.com/v1/invoicing/invoices?page=3&page_size=4&total_count_required=true',
                headers:{
                    content_type:'application/json',
                    Authorization:`Bearer ${token}`
                }
            }).then(function(response){
                // cy.log(response)
                expect(response.status).to.eql(200)
            })

        })

    })
   
})