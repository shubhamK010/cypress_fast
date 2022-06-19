import data from '../../fixtures/apiusers.json'

describe('verify the GET request', function () {
    let token = "745891281ba2f772c50e93fb858dffb790d55515369dd701ef90f2159a36c540"

    it('verify the GET request for goRest', function () {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(function (response) {
            // cy.log(response)
            expect(response.status).to.eqls(200)
            expect(response.body.length).to.eqls(20)
            return response.body
            //Q.line no 17.//response jo aaya hai uski body me 5 property hai kya wo next block me dekhna hai to niche di hui process follow karo
            // agagr previous it block se kuch naye wale it block me likhna hai to return response.body liha previous test case madhe
            //previous it block madhle je pahije te return chya pudhe liha..mala array pahije tar array liha

        }).then(function (users) {
            // cy.log(users)
            //Q.line no.23.  //agar mujhe dekhna hai ki Goutam naam ka person hai ki nahi to niche wala code likho

            //Ans.line no.23.iske liye sabhi users pe loop lagana hoga..saare users object me hai..aur wo saare objects body naam ki array me hai..isliye hum body array pe loop lagayenge
            // uske liye hum filer bhi use kar sakte or some method bhi use kar sakte jo ki condition match hoti hai to true or false return karti hai

            let aa = users.filter(function (el) {
                return el.name.includes("Goutam Johar ")   //aur ye hume object return karega

            })
            // expect(aa[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')   //filter method array retuen karti to uska 0th element hum dekh rahe hai jo ki name hai
            expect(users.some(el=> el.name.includes("Goutam Johar ") )).to.eqls(false)



            //Ans.line no 17.// users.forEach(element => {
            //     expect(element).to.have.property('id')
            //     expect(element).to.have.property('name')
            //     expect(element).to.have.property('email')
            //     expect(element).to.have.property('gender')
            //     expect(element).to.have.property('status')

            //     expect(element).to.have.all.keys('id','name','email','gender','status')
            // });
        })
        





    })

    it('verify the user addition',function(){
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body:{
                "name":"Tenali Ramakrishna", 
                "gender":"male", 
                "email":`${Math.floor(Math.random()*200000)}tenali.raaaamakrishna@15ce.com`, //hume yaha email 100000 me se email unique chahiye to hum use aisa likhenge
                "status":"active"
            }

            
        }).then(function(response){
            expect(response.status).to.eqls(201)

        })
    })

    //20 users ek saath cretae karne hai to hum 20 test cases lihte nahi baithenge..data hum fixtures file me store karke import kar lenge
    // for loop lagake 20 times separate karna ye good way nahi hai kyuki hum ek hi test case 20 times run hogi..yaha pe separate data har ek test case ke liye create nahi hoga
    //yaha pe mai 10 objects le raha hu fixture se import kar ke


data.forEach(function(payload){
    it('verify the user addition',function(){
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body:payload

            
        }).then(function(response){
            expect(response.status).to.eqls(201)
            //agar email is alread taken aata hai ..to us email ko validate karne ke liye hum boht kuch kar sakte hai
            //hum us create hue user ka id dekh sakte hai
            expect(response.body).to.have.property('id')
            //lekin ye chalane ke lliye fixture file ke data me change karne honge email ke user no.jo ki starting me kiye hai..kyuki data cleanup karke firse fixture data karne me time jata hai..to ye ek eas way hai


        })
    })

    
}) 



//agar token change ho raha hai to us token wali line pe kya likha hai wo niche dekho

// data.forEach(function(payload){
//     it('verify the user addition',function(){
//         cy.request({
//             method:"POST",
//             url:"https://gorest.co.in/public/v2/users",
//             headers: {
//                 'Authorization': `Bearer ${Cypress.env('token')}`
//             },
//             body:payload

            
//         }).then(function(response){
//             expect(response.status).to.eqls(201)

//         })
//     })

    
// }) 
    







})