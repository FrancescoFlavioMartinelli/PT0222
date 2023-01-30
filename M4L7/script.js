//REST - CRUD
//REST -> possiamo usare chiamate HTTP per conttattare l'api (fetch)
//CRUD -> possiamo usare il method della chiamata con uno stesso url per cambiare l'operazione da far fare al backend
// fetch(url, {
//     body: "",//dati che inviamo
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer wqriouhjqwoirqwhjoirqwjiorwqjriqwo"
//     },//informazioni aggiuntive della chiamata http
//     method: "GET" //GET POST DELETE PUT/PATCH - descrivono in che modo verranno traferiti
// })

//json-server
//https://github.com/typicode/json-server
//npm install -g json-server //ERRNO 4

//sudo npm install -g json-server (mac/linux)
//powershell - admin -> Set-ExecutionPolicy RemoteSigned (windows)

//per usare json-server
//1 - creare un file db.json
    //deve essere strutturato cosi'
    // {
    //     "nomeRisorsa1": [],
    //     "nomeRisorsa2": []
    // }

//2 - terminale - json-server db.json
//se non dovesse trovare il comando - npx json-server db.json

//se vogliamo modificare il db dobbiamo chiudere (ctrl+c) l'esecuzione, modicarlo e riavviarla

//Operazioni CRUD
//attenzione - body necessari e response attese possono variare tra le API (leggere documentazione e fare test Postman/log dei risultati per conferma)
let url = "http://localhost:3000"
let options = {
    method: "",
    headers: {
        "Content-type": "application/json"
    },
    body: ""
}
// fetch(url, options)

//CREATE
//url - url/risorsa
//method - POST
//headers - {"Content-type": "application/json"} 
//body - l'oggetto da creare (senza id)
//result - l'oggetto creato (con id)
function CREATEfetch() {

    let newProdotto = {
        name: "Maglia",
        price: 100
    }

    url = "http://localhost:3000/" + "prodotti"
    options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProdotto) //possiamo mettere solo stringhe
    }

    return fetch(url, options).then(res=>res.json())
}

function CREATE() {
    CREATEfetch().then(res=>{
        console.log("POST", res);
    })
}

//READ 
//url
    //1 - url/risorsa -> effettuare l'operazione su tutta risorsa
    //2 - url/risorsa/id (url/risorsa/4) -> effettuare l'operazione su un singolo oggetto in base al suo id
//method - GET
//body - none
//result - oggetto o array di oggetti
function READfetch() {
    url = "http://localhost:3000/" + "prodotti"
    options = {
        method: "GET"
    }
    return fetch(url).then(res=>res.json()) //di default il fetch è GET
}
function READfetchBYID(id) {
    url = "http://localhost:3000/" + "prodotti/" + id
    options = {
        method: "GET"
    }
    return fetch(url).then(res=>res.json()) //di default il fetch è GET
}

function READ() {
    READfetch().then(result => {
        console.log("READ", result);
    })
}
function READBYID(id) {
    READfetchBYID(id).then(result => {
        console.log("READ", result);
    })
}


//UPDATE
//url - url/risors/id (possiamo modificare solo elementi singoli)
//method - PUT/PATCH
//headers - {"Content-type": "application/json"} 
//body - i dati modificati (alcuni backend voglioni solo i dati da cambiare, altri vogliono l'oggetto come deve essere)
//result - l'oggetto modificato
let oggettoOriginale = {
    id: 1,
    name: "Maglia",
    price: 100
}
function UPDATEfetchBYID(id, oggettoModificato) {
    url = "http://localhost:3000" + "/prodotti" + "/"+id
    options = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(oggettoModificato)
    }
    return fetch(url, options).then(res=>res.json())
}


function UPDATE() {
    let oggettoModificato = {...oggettoOriginale, price: 200}
    UPDATEfetchBYID(1, oggettoModificato).then(res=>{
        console.log("UPDATE", res);
    })
}


// !!!
let p = {
    // id: 1,
    name: "Maglia",
    price: 100
}

//nella maggior parte dei casi basta indicare le proprietà da modificare
pBody = {
    price: 200
}
//in altri casi serve l'intero oggetto ()
pBody = {
    id: 1,
    name: "Maglia",
    price: 200
}
pBody = {
    ...p,
    price: 200
}



//DELETE
//url
    //1 - url/risorsa -> effettuare l'operazione su tutta risorsa (!!!!!)
    //2 - url/risorsa/id (url/risorsa/4) -> effettuare l'operazione su un singolo oggetto in base al suo id
//method - DELETE
//body - none
//result - l'elemento eliminato

async function DELETEfetch() {
    url = "http://localhost:3000/" + "prodotti"
    options = {method: "DELETE"}
    let response = await fetch(url, options)
    let result = await response.json()
    return result
}

function DELETEfetchBYID(id) {
    url = "http://localhost:3000/" + "prodotti/" + id
    options = {method: "DELETE"}
    return fetch(url, options).then(res=>res.json())
}

function DELETE() {
    DELETEfetchBYID(1).then(res=>{
        console.log("DELETE", res);
    })
}