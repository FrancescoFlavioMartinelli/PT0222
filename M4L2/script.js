//1 - leggere il file .json -> async
//2 - costruire le card da visulizzare nel body per ogni foto dell'array -> manipolazione dei risulatati della funzione async

//AJAX
// console.log("inzio")

// let request = new XMLHttpRequest(); //creazione richiesta (non è stata ancora inviata)
// request.open('GET', 'photo.json') //impostiamo la risorsa da contattare (URL) e il METHOD

// request.onload = (res)=>{
//     console.log(res.srcElement);//RESPONSE
//     if(res.srcElement.status == 200) {
//         //successo
//         console.log(res.srcElement.response); //il risultato della lettura (array json -> quindi una stringa)
//         let arr = JSON.parse(res.srcElement.response) //converte da stringa json a oggetto js
//         console.log(arr);
//         //qua costruisco le cards
//         creaCards(arr)
//     }
// } //impostazione callback

// request.send() //invia la richiesta

// console.log("fine")


//CREAZIONE DELLE CARDS
function creaCards(cards) {
    console.log("CREO", cards);
    cards.forEach((c)=>{
        //creo i tag che mi serviranno
        let divCard = document.createElement("div")
        divCard.classList.add("card")
        divCard.style.width = "18rem"
        let img = document.createElement("img")
        img.classList.add("card-img-top")
        img.src = c.thumbnailUrl
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        let cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.innerText = c.title
        //assemblo la card
        cardBody.append(cardTitle)
        divCard.append(img, cardBody)
        //la inserisco nel dom
        document.body.appendChild(divCard)
    })
}


// FETCH **** crea e invia una HTTP Request
// fetch(url, options)
//riceve come parametri
//url -> l'indirizzo da contattare
//options -> oggetto composto così
let options = {
    method: "GET", //metodo - se non specificato 'GET'
    headers: {
        "Content-Type": "application/json"
    },
    body: "" //payload - dati da inviare nella request, deve essere stringa quindi JSON.stringify(var) per convertire una variabile a stringa
}

//restituisce una Promise, la funzione interna restituisce la response

//! non possiamo usare fetch() alla radice del codice, va dentro a una funzione - CORS, CrossOrigin, Scope, ...
// fetch("http://jsonplaceholder.typicode.com/photos")
function fetchPhotos() {
    let f = fetch("photo.json")
    console.log(f);
    f.then((response)=>{
        let data = response.json()//estrapolare i dati json della response -> restituisce la variabile js !! .json() restituisce una promise
        data.then((res)=>{
            console.log(res);
            creaCards(res)
        })
    })
}

// function fetchPhotos() {
//     let f = fetch("photo.json")
//     f.then((resp)=>{
//         return res.json() //quewto return verrà catturato dal then successivo
//     }).then((res)=>{
//         creaCards(res)
//     })
// }

function fetchPhotos() {
    //versione standard
    fetch("photo.json").then(res=>res.json()).then(res=>{
        creaCards(res)
    }).catch(err=>{})
}

async function fetchPhotos() {
    //versione async/await
    let response = await fetch("photo.json")
    let res = await response.json()
    creaCards(res)
}

console.log("inizio")
fetchPhotos()
console.log("fine")

////////////////////////////////questa funzione legge i dati ma non crea le cards, la possiamo usare ogni volta per cose diverse
async function fetchData() {
    let response = await fetch("photo.json")
    let res = await response.json()
    return res
}

function fetchData() {
    return fetch("photo.json").then(resp=>resp.json())
}

fetchData().then((data)=>{
    //data è l'array
})


