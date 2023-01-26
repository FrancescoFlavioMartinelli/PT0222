

// //ASYNC/AWAIT
// function x() {
//     return 10
// }
// let a = x()

// async function y() {
//     return 20
// }

// // let b = y() //no perchè async da un return Promise
// y().then(res=>{
//     let b = res
// })


// //////STORAGE/COOKIES - servono per salvare dei dati in maniera persistente sul computer dell'utente
// // localStorage -> quando spengo il computer
// // sessionStorage -> quando chiudo la finestra si perdono i dati
// //questi storage sono relativi al dominio

// //lettura
// let i = localStorage.getItem("nomeVariabile") //return - la variabile (come stringa) o null
// //JSON.parse(string) -> var js
// //salvataggio 
// localStorage.setItem("nomeVariable", "valoreVariabile")//return -> void (nessun return)
// //i parametri deovno essere 2 stringhe
// //se vogliamo salvare varaibili js (complesse) dobiamo convertirle in stringhe (ad esempio JSON)
// //JSON.stringify(var) -> string

// //eliminare
// localStorage.deleteItem("nomeVariabile")


// ///////
//sezione del codice dove controlliamo se è presente qualcosa nello storage
let n = localStorage.getItem("nome")
if(n) { //se n è null non c'era la variaible
    saluta(n)
} else {
    //sezione del codice dove qualche interazione salva variabili nel localStorage
    let p = prompt("inserire il tuo nome")
    localStorage.setItem("nome", p)
    saluta(p)
}


function saluta(n) {
    alert("Benvenut " + n)
}



////////////////////////////////////////////////////////////////
//mostrare a schermomun timer che ogni secondo dice da quanti sec siamo nella pagina. Se chiudo e riapro la pagina il timer continua a contare
//setInterval per operazione ogni secondo
//localStorage/sessionStorage - per salvare il tempo a cui siamo arrivati

