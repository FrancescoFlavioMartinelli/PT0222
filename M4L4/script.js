//this -> object
let o = {
    a: 1, //proprietà
    b: 2,
    c: 3,
    d: this.a * 2,
    m: function(){
        return this.a + this.b + this.c
    } //metodi
}
// console.log(o.m())
// let q = {
//     a: 10, //proprietà
//     b: 2,
//     c: 3,
//     m: ()=>{
//         return o.a + o.b + o.c
//     }
// }
// console.log(o, q);

// o.a
// o["a"]

//inizializzazione della funzione
function g() {console.log("G");} //hoisting -> possiamo crearla ovunque nel codice e usarla ovunque
let f = (e)=>{console.log("F");} // va prima eseguito = e poi si può usare f
let f1 = function(e){console.log("F1")}
//valore della funzione
// ()=>{}
// function()


// fetch().then(()=>{})

//classi -> strutture per creare oggetti
class Classe {
    constructor(){
        this.a = 1
        this.b = 2
        this.c = 3
    }
    m() {
        return this.a + this.b + this.c
    }
}

// let o = new Classe()
// let q = new Classe()
// q.a = 10
// console.log(o.m(), q.m());

// function asd(o) {
//     o.x * 2
// }

// asd({
//     x: 10,
//     func: ()=>{return this.x * 2 }
// })

//Quando vogliamo aggiungere una proprietà o metodo a un oggetto e vogliamo usare le sue prorpietà o metodi per assegnarne il valore usiamo this.prop o this.metodo() per far riferimento

//////////////////////////////////
//DESTRUCTURING
function d({a, b}) {//mettiamo come parametro {prop} per leggere la proprietà porp del parametro come variabile
    console.log(a, b);
}

let x = {a:10, b: 20}
d(x)

let prod = ["NomeProdtto", 10, "G"] 
function h([a, b, c]){
    console.log(a, b, c);
}

h(prod)

///
fetch("http://jsonplaceholder.typicode.com/users/1").then((res)=>{
    return res.json()
}).then(({name, email})=>{
    console.log(name, email);
})

////////////////////////////////////////////////////////////////
//SPREADING
let o1 = {a: 10, b: 20}
let o2 = {c: 30, d: 40}

// let o3 = {a: o1.a, b: o1.b, c: o2.c, d: o2.d}
let o3 = {...o1, ...o2, e: 50}
let o4 = {...o3} //possiamo usarlo per copiare i valori di un oggetto ma non l'oggetto stesso
//
let p = o3
p.a = 0 // o3.a diventa 0, perchè l'uguale non copia solo i valori ma anche il riferimento

let q = {...o3}
q.a = 100 //così copiamo i valori ma non il riferimento quindi q.a non modifica o3.a

//vale anche per gli array
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let arr = [...arr1, "a", ...arr2]


function y(a, b, c, d) {
    console.log(a+b+c+d)
}
// x(arr1[0], arr1[1], arr1[2], arr1[3]);
y(...arr1) // x(1, 2, 3, 4)

console.log(...arr1);

//funziona anche con le stringhe, mette tutti i caratteri compresi gli spazi come singole stringhe separate da virgola
let s = "ciao"
// ...s -> "c", "i", "a", "o"
let arrS = [...s]


////////////////////////////////////////////////////////////////esempio this
let u1 = {
    a: 10,
    b: 20,
    m: function(){return this.a + this.b}
}

let u2 = {...u1}
u2.a = 100
console.log(u1.m(), u2.m());
//scope - usiamo function(){} ngeli oggetti e non ()=>{}, la arrow per i parametri



/////////Metodi degli Array
let a = [1, 2, 3, 4, 5, 6, 7]

//find - trovare un elemento secondo una logica
//param -> funzione
    //itera l'array ed esegue la funzione parametro passando come parametro ogni elemento dell'array
    //se la funzione restituisce true l'iterazione si blocca e viene restituito il risultato
//return -> il risutlato se trovato e undefined se non lo trova
let found = a.find((e, i, arr)=>{
    return e > 10
})
console.log(found);

//
fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((r)=>{
    let azienda = "Deckow-Crist"
    let utente = r.find((u)=>{
        return u.company.name == azienda
    })
    // console.log(utente.name);//attenzione a usare i dati della variabile ottenuta con il find, se dovesse essere undefined (non trovato) il codice genererebbe errori che possono bloccare lo script
    if(utente) {
        console.log(utente.name)
    }
})


//findIndex - uguale a find ma restituisce undefined o l'indice dell'elemento trovato

//per manipolare gli array ci servono gli indici, può essere utile per trovare l'indice a partire da un id


//includes - ci dice se l'elemento parametro è presente nell'array
//param -> 
    //il valore che vogliamo controllare 
    //l'indice di partenza
//return -> boolean
a.includes(5) //true
a.includes("5") //false

//* il controllo fatto è ===, per controllare la presenza di oggetti (che nono sono comparabili) possiamo una combinazione di if e find()
if(a.find(()=>{
    return true
})){}