//DATI - variabili
//let var -> crea la variabile *
// = -> assegnazione
let x = 12
//numero
//stringhe '' "" -> asf 124 asf6 asg!
//boolean -> true/false
    //ogni dato in un'operazione booleana ha un valore boolean
    // 1 -> true
    // 0 -> false

    // "" -> false
    // "asfgsaasdg" -> true

// null - undefined
let y // -> undefined * può arrivare anche come risultato di operazione
//sia null undefined == false
let z = null
let res = operazione() //restituisce null oppure 10
if(res != null) {
    res*2
}

//oggetti {} - raccolta di coppie chiave-valore
//struttura dati - ha delle proprietà che sono parole chiave con associato un dato
let orario = {
    ora: 19,
    minuti: 30,
    secondi: 0
}
orario.ora = orario.ora - 1

let prodotto = {
    nome: "maglione",
    prezzo: 20,
    disponibile: true,
    codice: {
        categoria: "abbigliamento",
        id: 13
    }
}

// let negozio = {
//     propietario: {
//         nome: "nome",
//         eta: 30
//     },
//     prodotti: [
//         {
//         nome: "maglione",
//         prezzo: 20,
//         disponibile: true,
//         codice: {
//             categoria: "abbigliamento",
//             id: 13
//         }
//     ]
// }

//possiamo richiamandola con la sua chiave dopo il .
prodotto.nome // -> "maglione"
prodotto.codice // ->{categoria: "abbigliamento",id: 13}.id -> 13
prodotto.codice.id // -> 13

//array - gruppo ordinato di dati []
let arr = [1, 2, 3]
let arr1 = ["as", 14, {
    nome: "test"
}]
let arr2 = [
    [1, 2, 3],
    ["a", "b", "c"]
]

//possiamo leggerne/assegnare i valori indicando la posizione dell'elemento (a partire da 0)
arr[0] // -> 1
arr1[2] 
arr1.length //3 0-2 -> ultimo indice è sempre arr.length-1


//OPERAZIONI
//aritmetice -> numeri (undefined)
//+ - / * ** %

//logiche -> boolean
// == === != !=== < > <= >=

1 == "1" //true
1 === "1" //false

let a = 5 != 6 // a -> true

//FUNZIONI - combinano operazioni per dare un risultato
// (a, b, c, d, e) -> parametri - dati che riceve dall'esterno in input (quando eseguiamo una funzione)
// =>
// {} -> operaioni da eseguire in seguito fino a un return (opzionale)
//valore
// ()=>{}
// function() {}

//inizializzazione
function f() {
    console.log("ciao")
}
let g = ()=>{}

//per eseguire una funzione (e otterene il risultato)
g()
f()

//
let p = {
    prezzo: 10,
    sconto: 7,
    //metodo 
    prezzoScontato: ()=>{
        return p.prezzo - (p.prezzo * p.sconto/100)
    }
}

p.prezzoScontato()

function operazione(a, b, c) {
    let res = a + b + c
    res = res*2
    return res //dopo il return non viene eseguito nulla
    //se il return viene omesso al termine delle operazioni viene restituito undefined
    res / 5
}

let risultato = operazione(2, 3, 4)

//Classi - strutture di oggetti
class Prodotto{}

let p1 = new Prodotto()

let now = new Date()


let boolean = true;
let val = "1";
//costrutti
//controllo
if(boolean){
    //operazioni da eseguire se boolean è true
} else {
    //operazioni da eseguire altrimenti
}

switch(val) {
    case "1":
        //se val === "1" allora esegue queste operazioni
        //
        //
        break;
    case "2":
        //
        break;
    default:
        //
        break;
}

//cicli
for(let i = 0; i < 10; i++){
    //operazioni - possiamo usare la i come variabile
}
while(!boolean){
    //operazioni
}
do{
    //operazione
}while(!boolean)

//Classi JS complesse String, Number, Array, Date, XMLHTTPRequest
//proprietà e metodi


////////////////////////////////////////////////////////////////////////
//HTMLElement - DOM
//document //il nostro documento
let h1 = document.getElementsByTagName("h1") // HTMLCollection (tipo array di elementi html con il tag segnato) 
// getElementsByClassName()
// querySelectorAll() //tutti elementi che correispondono alla query parametro
// querySelector('div h1') //1 elemento che correisponde alla query parametro
// getElementById() //1 solo elemento con l'id

function creaH3(){
    let h3 = document.createElement("h3")
    h3.innerText = "PROVA PROVA"
    
    document.body.appendChild(h3)
}


//metodi della classe HTMLELEMETN
//Event
let btn = document.createElement("button")
btn.innerText = "PROVA"
document.body.appendChild(btn)

btn.addEventListener("click", ()=>{
    creaH3()
})
///////