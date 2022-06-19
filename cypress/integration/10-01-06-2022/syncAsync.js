// function add(){
//     console.log(8+8)
// }



// function add2(){
//     console.log(5+5)
// }

// add2()
// add()

//Async===>async apne aap nahi banta,hume banana padta hai
//API me setTimeout naam ka function nature me async hai

// function add3() {
//     setTimeout(function () {
//         console.log(9 + 9)

//     }, 2000)
// }
// function add4() {
//     console.log(15 + 15)

// }

// add3()
// add4()

//setTimeout function ye nature me async hai isliye 9+9 ka output 2 second ke baad deg ,kyuki humne 2000 value setTimeout  function me set ki hai
//dusra function pehle output dega
//dusra function baad me call kiya hai phir bhi dusra function pehle chalega kyuki pehle wale 9+9 ko setTimeout function lagaya hai

//Real time me saare call async hote hai,async hote hai matlab saare call eksath hi jaate,aur jiska output pehle aata haiwo display hone lag jaata hai

//Agar hum API me function ko call karte hai wo hume 'id' deta hai,phir hum usi id ko use karko user ki information nikalte hai..aur phir usi information se hum user id ko search karte hai

// function====>id===>user info=====>email
//matlab bhale hi call async ho,lekin iska execution sync me chahiye

// function add5() {
//     setTimeout(function () {
//         console.log('Here I am getting ID')
//         setTimeout(function () {
//             console.log('Here I am getting user info')
//             setTimeout(function () {
//                 console.log('Here I am getting email')

//             }, 2000)

//         }, 4000)
//     },1000)
// }
// add5()
// ise call back hell bolte hai---jo yeh triangle bana hai,ek ke andar ek function likhne se
//lekin iska execution sync me hoga id-->info-->email

//srtTimeout function use kiya hai saare call async hai khali execution sync me hai
//bhale hi inko ek ke baad ek hone me time lag raha hai lekin ye sync me hai
//but ye bahut tidious process hai,thak adene wali process hai
//so we got solution over call back hell and that is "promises"

//promises state==>pending
//                 resolve
//                 reject
//aur ye resolve,reject functions hai

let wachan = new Promise(function (resolve, reject) {
    let a = 20
    let b = 20

    if (a == b) {
        resolve("welcome")       //yaha pe function call karke "welcome bola hai"
    }
    else {
        reject("see you")
    }//yahi tak humne promise consume nahi kiya,consume karke hum niche call kar rahe hai
})
//consuming promise
//  object.then(fn---resolve,fn---reject)

wachan.then(function (str) {
    console.log("welcome")

}, function (str) {
    console.log("see you")

})









let wachan2 = new Promise(function (resolve, reject) {  // yaha hum parameter me string,object,array,function,etc cheeze pass kar sakte hai

    let x = 50
    let y = 40

    if (x == y) {
        resolve([1, 3, 4, 5])

    }
    else {
        reject([11, 22, 33])

    }
})
wachan2.then(function (x) {
    console.log(x[0])
})
    .catch(function (y) {  //.catch madhe rejected values miltat
        console.log(y[0])
    })








let wachan3 = new Promise(function (resolve, reject) {
    let a = 200
    let b = 2000

    if (a == b) {
        resolve('10')
    }
    else {
        reject('creeation failed')
    }

})
function Getinfo(id) {
    return new Promise(function (resolve, reject) {

        if (id == 10) {
            resolve('shubhamkmb@gmail.com')

        }
        else {
            reject('unable to get info')
        }

    })


}
wachan3.then(function (id) {
    console.log(id)            // yaha pehle id milega
    Getinfo(id).then(function (email) {
        console.log(email)     // yaha id ke baad email milega
        return email           //agar aage kahi email use karna hai to yaha hum return kar sakte hai


    }).then(function(email){   // upar ki sb process hone ke baad hhi .then block chalgea
        console.log(email)
    })                     
}).catch(function(str){
    console.log(str)
})


// callback hell se to accha hai promises and ek ke baad ek promises hum likh sakte hai jaise ki upar ka program likha hai













