//localStorage - sessionStorage
//vengono salvata nello storage solo stringhe
let key = "nome"
let value = "Flavio"
localStorage.setItem(key, value)
//
localStorage.getItem(key) //se non dovesse esserci la variabile da return null
// let x = localStorage.getItem(key)
// if(x != null) {
//     x.toLocaleLowerCase()
// }
//
localStorage.removeItem(key)


////////////////////////////////////////////////////////////////
//await async - .then()
//pattern di programmazione, ci permette di non usare il then e avere una scrittura più organizzata quando abbiamo più esecuzioni asincrone

//await -> davanti a una Promise per aspettare il termine della funzione che circonda e ricevere il suo return
//Promise -> "wrapper" intorno a una fuznoine asincrona (cioè che ha un return async)


let p = fetch() //return Promise<Response>
//Promise è un oggetto sincrono
//la Promise circonda un'esecuzione async, il suo return non essendo sincrono non può essere manipolato se non in callback

async function f(){
    let response = await fetch() //return Response
    let result = await response.json()
    return 10
}


fetch().then((response)=>{
    response.json().then((result)=>{
        //per evitare di mettere un then dentro l'altro possiamo fare che la funzione del primo restituisca un valore e quest sarà catturato dalla funzoine del successivo then
    })
})

// fetch().then((response)=>response.json()).then((result)=>{})
async function getResult() {
    let response = await fetch()
    //if response.ok
    let result = await response.json()
    return result
}

// getResult().then((result)=>{
//     creaCards(result)
// })

async function popolaBody() {
    let result = await getResult()
    creaCards(result)
}

async function betterFetch(url, options) {
    return await (await fetch(url, options)).json()
}

// function betterFetch(url, options) {
//     return fetch(url, options).then(res=>res.json())
// }

// function getProdottiDisponili(){
//     return betterFetch("prodotti", {}).then(res=>{
//         return res.filter((e)=>{
//             return e.disp == true
//         })
//     })
// }


// fetch("qwe", {method:"GET"}).then((res)=>res.json()).then(res=>{})
// betterFetch("qwe", {method:"GET"}).then((res)=>{})