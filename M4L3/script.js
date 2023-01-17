//METODI DEGLI ARRAY
let arr = [1, 2, 3, 4, 5, 6]
arr[0] //->1
arr.length - 1 //posizione massima

// //FOREACH - itera l'array ed esegue la funzione parametro passando come parametri l'elemento e l'indice dell'attuale iterazione
// //param -> 1 funzione -> riceve 3 paraemtri
//     //e -> elemento dell'iterazione
//     //i -> indice dell'iterazione
//     //a -> array originale
// //return -> void (nessun return)
// //non modifica l'array originale

// //x - undefined
// let x  = arr.forEach(f)
// console.log(x);

// function f (e, i, a) {
//     console.log(e, i, a);
// }

// //USI COMUNI:
// //- costruzione del dom
// //- debug dati

// //
// //FILTER - itera l'array, esegue la funzoine per ogni elemento e restituisce un nuovo array. Questo array conterrà gli elementi la cui iterazione ha restituito true
// //param -> (e, i, arr)=>{ return true }
// //return -> nuovo array filtrato
// //non modifica l'array originale
// let pari = arr.filter((e, i, arr)=>{
//     if(e%2 == 0) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log("PARI", pari);

// //USI COMUNI:
// // - filtrare un elemento in base a una prorpietà
// todosCompletati = todos.filter((e)=>e.completed)
// todosNonCompletati = todos.filter((e)=>!e.completed)
// // - eliminare un elemento per id *
// todo = todos.filter((e)=>{
//     if(e.id != id) {
//         return true
//     } else {
//         return false
//     }
// })

// //CON IL FOREACH SI FAREBBE COSÌ
// let numeri = [1, 2, 3, 4, 5, 6, 7, 8]
// pari = []
// numeri.forEach((n)=>{
//     if(n%2) pari.push(n)
// })

// function filter(arrIniziale, f) {
//     let nuovoArray = []
//     arrIniziale.forEach((e)=>{
//         if(f(e)) nuovoArray.push(e)
//     })
//     return nuovoArray
// }



//MAP - itera l'array ed esegue la funzione e restituisce un nuovo array. Ogni return di questa funzione verrà usato come valore del nuovo array
//parametro -> (e, i, arr)=>{ return e }
//return -> nuovoArray
//non modifica l'array originale
let doppio = arr.map((e, i, arr)=>{
    return e * 2
})
console.log("DOPPIO", doppio);

//FATTO CON IL FOREACH
function map(arrIniziale, f) {
    let arrResult = []
    arrIniziale.forEach((e, i, arr)=>{
        let res = f(e, i, arr)
        arrResult.push(res)
    })
}

//USI COMNUI
// - modificare un array per ottenerne uno più consono al contesto
// - semplificare oggetti complessi
// - complicare oggetti a cui mancano dei dati necessari
// - modificare completamente o parzialemnte tutti o alcuni dati

// - modificare un elemento identificato in base in all'id


//REDUCE - itera l'array esegue la funzione, restituisce un valore come risultato (non per forza array). La fuznione viene eseguita con 2 parametri, uno è il dato che stiamo iterando, uno il risultato finora. Il return di questa fuinzione modifica quel risultato fino alla fine
//parametro -> (map, val)=>{}
    //map -> risultato finora
    //val -> elemento dell'iterazione
    //return -> il ristulato è il map dell'iterazione successiva
//return -> risultato finale
//non modifica l'array

//il fa un'iterazione in meno degli altri metodi perchè alla prima iterazione
//map == arr[0]
//val = arr[1]
let sommaArr = arr.reduce((map, val)=>{
    console.log(map, val);
    return map + val
})
console.log("SOMMA", sommaArr);

//CON IL FOREACH SAREBBE


//USI COMUNI
// - ottenere un risultato in base a un'operazione tra gli oggetti dell'array
// - trovare un elemento specifico
let max = arr.reduce((map, val)=>{
    console.log(map, val);
    if(map > val) return map
    return val
})
// - raggrupare dei dati *

//FOREACH







console.log("ARR", arr);

