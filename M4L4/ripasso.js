function f(c) {
    // return 10//non possiamo ottenerelo se f è asincorno
    c(10) //funzione callback
}

//////////
// f(((x)=>{
//     x(10)
// })((((y)=>{
//     y(100)
// })((z)=>{
//     z()
// }))))
//PROMISE

let p = new Promise((resolve, reject) => {
    //questa pè la funzoine async
    let res = 10
    //quando dobbiamo fare return
    resolve(res) //completa la funzione asincrona e restituisce res alle callback

    let err = "Errore"
    //se ci fosse un errore
    reject(err) //e
})
console.log(p)

p.then((res)=>{
    //questa è la callback
    return x
}).then((x)=>{
    //questa è la callback della callback (riceve come parametro il return della callback)
})


let t = fetch().then((res)=>{return res.json()})
let t1 = t.then((r)=>{

})


//////
let s = sad().then(()=>{}).then(()=>{




    return 10
})

console.log("FINE");
console.log("FINE");
console.log("FINE");
console.log("FINE");
console.log("FINE");
console.log("FINE");


s.then(()=>{
    
})



function f(succ) {
    let res = 0
    //
    //
    //
    fetch().then((x)=>{
        res = x *2
        succ(res)
    })
}

funzione((res)=>{

})

let funz = new Promise(f)

funz.then((res)=>{

})

///////////////


async function utentiAttivi() {
    let res = []
    let response = await fetch() //res = risultato del fetch filtrato
    let utenti = await response.json()
    res = utenti.filter((u)=>{
        return u.ultimoAccesso.getTime() > new Date().getTime() - (24* 60 * 60 * 1000 * 60)
    })
    return res
}

// let r = utentiAttivi() //return di async è sempre promise
// let users = await utentiAttivi() //await funziona solo dentro una async function
utentiAttivi().then( ()=>{} )


