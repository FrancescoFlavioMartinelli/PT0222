// leggiDati(f)
// //
// //
// //

// function leggidati(){
//     //
// }

// //callback function
// function f(x) {
//     let arr = x
//     arr.forEach()
// }

////////////////////////////////

// let x = 0;
// console.log("inizio", x);

// aumenta((p)=>{
//     //passiamo come parametro cosa fare (funzione) quando aumenta ha terminato
//     console.log("fine", p);
// })
// //dopo che aumenta viene chiamata il codice va avanti
// console.log("DOPO")


// ///////callback function pattern
// function aumenta(f){
//     setTimeout(()=>{
//         x++
//         f(x)
//     }, 1000)
// }

// /////////
// function asyncFunc(a, f) {
//     setTimeout(()=>{
//         a = a*2
//         f()
//     })
// }

// let y = 2;
// console.log("inizio")
// asyncFunc(y, visualizza)


// function visualizza(a) {
//     console.log("VIS", a)
// }


/// Promise - come parametro la funzione asincrona
// let p = new Promise(asyncFunc)
// console.log(p);
// p.then((res)=>{
//     console.log("fine", res)
// })

//callback
// aumenta((p)=>{
//     console.log(p);
// })
// let t = aumenta().then((p)=>{
//     console.log(p)
//     return p*2
// })
// t.then((res)=>{})

// aumenta()
//     .then(()=>{})
//     .then(()=>{})
//     .then(()=>{})
//     .then(()=>{})
//     .then(()=>{})
//     .then(()=>{})
//     .then(()=>{})


//////// COSTRUZIONE PROMISE
function aumenta(a) {
    let p = new Promise((succ, err)=>{
        //nelle funzioni passate alle Promise non doppiamo fare il return Synch ma usiamo
        //succ() err() -> hanno 1 parametro
        //per segnalare la fine della promise
        setTimeout(()=>{
            a++
            // return a //questo è il return della funzione parametro di setTimeout

            succ(a) //imposta lo status della Promise a success e "restituisce"  come risultato il parametro a
        }, 1000)


        // return a //questo è il risultato dell'esecuzione asincrona
    })
    return p
}

console.log("inizio")
aumenta(10).then((res)=>{
    console.log("RES", res)
}).catch((err)=>{
    console.log("ERR", err)
})
console.log("fine")


///// PUNTI IMPORTANTI
/*
1 - quando usiamo una funzione che restituisce una Promise il dato è la Promise e non il suo risultato (ovvero il risultato della funzione async che rappresenta)
2 - per usare i dati ottenuti dalla funzione async usiamo le callback functions come parametro del metodo .then()
3 - per gestire errori di esecuzione usiamo .catch()

- Tutte le operazioni che hanno a che fare con il risultato della funzione async dovranno essere fatte nelle callback dei then()

- .then() .catch() restituiscono delle Promise quindi possono essere concatenati (il return della funzione callback di un then sarà il parametro di quella del then successivo)
aumenta().then((x)=>{return x*2}).then((y)=>{})
x -> risutlato della funzione async di aumenta
y -> x*2 -> il return della funzione callback eseguita dal then() precedente
*/


// async / await
// await - da usare davanti a una promise
// aspetta il termine dell'esecuzione asincrone della promise e leggiamo sincronemente il risultato
// console.log("inizio");

// let res = await aumenta()
// //non serve la callback, posso gestirmi i dati in maniera sincrona
// console.log("res", res)

// console.log("fine")

//!! Possiamo usare await solo se siamo dentro una async function
//async davanti a una funzione rende la funzione asincrona
async function f(){
    let res = await aumenta()
    console.log("res", res)
    return "CIAO"
}

console.log("inizio");
f() //f è async quindi il risutlato finale è lo stesso della callback
console.log("fine")

//async/await serve a lavorare in maniera comoda con funzioni asincrone ma non cambia il modo il cui sono gestite
//non possiamo fare
let c = f() //questo non da il risultato ma una Promise che darà il return come risultato
//perchè async, le funzioni restituiscono sincronamente una Promise con dentro una loro esecuzione
//c -> Promise
f().then((res)=>{
    //qui leggiamo il return "CIAO"
})