// //FOREACH
// // lettura del dom e aggiunta di eventListener su ogni elemento selezionato
// let bottoni = document.getElementsByClassName("btn")
// //getElementsByTagName restituisce una HTMLCollection che si comporta come un Array ma non è classe ("tipologia") Array quindi non ha i metodi degli array
// console.log(bottoni);
// //possiamo convertire qualunque lista in Array
// let bottoniArr = Array.from(bottoni)
// console.log(bottoniArr);
// bottoniArr.forEach((b)=>{
//     b.addEventListener("click",()=>{
//         console.log(b.innerHTML);
//     })
// })


// let queryBottoni = document.querySelectorAll(".btn") // return NodeList
// console.log(queryBottoni);
// queryBottoni.forEach(()=>{})//forEach metodo delle NoderList, non è i9l forEach degli Array





// //FILTER
// // //eliminare un elemento per id
// // let prod = [
// //     {
// //         id: 1,
// //         nome: "prod1"
// //     },
// //     {
// //         id: 2,
// //         nome: "prod2"
// //     },
// //     {
// //         id: 3,
// //         nome: "prod3"
// //     }
// // ]
// // /////////
// // todos = []

// // getData()

// // function getData() {
// //     fetch("http://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then((res)=>{
// //         console.log(res);
// //         todos = res
// //         creaLista(todos)
// //         //creo il dom
        
// //     })
// // }

// // function creaLista(todos){
// //     let ul = document.createElement("ul");
// //     todos.forEach((e, i)=>{
// //         let li = document.createElement("li");
// //         li.innerHTML = e.id
// //         let btn = document.createElement("button")
// //         btn.innerHTML = "COMPLETA"
// //         li.append(btn)
// //         ul.append(li)
// //         btn.addEventListener("click", ()=>{
// //             eliminaTodo(e.id)
// //         })
// //     })

// //     document.body.innerHTML = ""
// //     document.body.appendChild(ul)
// // }

// // // in base all'indice, possono crearsi discrepanze tra indice e id dell'elemento
// // // function eliminaTodo(i) {
// // //     todos.splice(i, 1)
// // //     creaLista(todos)
// // // }
// // function eliminaTodo(id) {
// //     todos = todos.filter((e)=>{
// //         if(e.id != id) {
// //             return true
// //         } else {
// //             return false
// //         }
// //     })
// //     creaLista(todos)
// // }
// // //versioni strette
// // // todos.filter((e)=>{
// // //     return (e.id != id)
// // // })
// // // todos.filter((e)=>e.id != id) //return sottointeso - senza graffe




// // //////FILTRARE TODO COMPLETATI DA NON
// // let todoCompletati = todos.filter((e)=>{
// //     // if(e.completed == true) {
// //     //     return true
// //     // } else {
// //     //     return false
// //     // }
// //     //siccome la condizione dell'if è un valore booleano e restituisco un valore booleano, faccio il return della condizione stessa
// //     // return (e.completed == true)
// //     //essendo completed boolean c'è correlazione tra completed e return
// //     return e.completed
// // })
// // let todoNonCompletati = todos.filter((e)=>{
// //     // if(e.completed == false) {
// //     //     return true
// //     // } else {
// //     //     return false
// //     // }
// //     // return (e.completed == false)
// //     return !e.completed
// // })


// //MAP
// //semplificare un dato
// getUsers()
// // function getUsers() {
// //     fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((res)=>{
// //         console.log(res);
// //         let utentiSimple = res.map((u)=>{
// //             let simpleUser = {
// //                 id: u.id,
// //                 name: u.name,
// //                 email: u.email
// //             }
// //             return simpleUser
// //         })
// //         console.log(utentiSimple);
// //     })
// // }

// //complicare il dato
// // function getUsers(){
// //     fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((res)=>{
// //         let utenti = res.map((u)=>{
// //             u.admin = false
// //             return u
// //         })
// //         console.log(utenti);
// //     })
// // }

// //modificare uno o più dati in base a condizioni (id, ecc)
// // function getUsers(){
// //     fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((res)=>{
// //         let utenti = res.map((u)=>{
// //             if(u.id == 1) {
// //                 u.name = "Flavio"
// //             }
// //             return u
// //         })
// //         console.log(utenti);
// //     })
// // }

// function getUsers(){
//     fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((res)=>{
//         let utentiDOM = res.map((u)=>{
//             let li = document.createElement("li")
//             li.innerHTML = u.id + " - " + u.name
//             return li
//         })
//         console.log(utentiDOM);

//         utentiDOM.forEach((e)=>{
//             document.getElementById("listaUser").append(e)
//         })
//     })
// }


//REDUCE
getPosts() 
//RAGGRUPPARE*
function getPosts(){
    fetch("http://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then((res)=>{
        console.log(res);
        let gruppo = res.reduce((map, val)=>{
            // al primo giro map è un utente ma il dato che vogliamo restituire è un Array
            //{1: 10, 2: 5, 3: 57}
            //controllo se map ha la struttura di utente o quella di risutlato, così da capire a che giro sono
            if(map.userId == undefined) {
                console.log("SECONDO GIRO");
            } else {
                console.log("PRIMO GIRO");
                //***al primo giro anche map ha dei dati rilevanti
                let id = map.userId
                let userCache = map
                map = {}
                map[id] = [userCache]
            }
            if(map[val.userId] == undefined) {
                map[val.userId] = []
            }
            map[val.userId].push(val)
            return map //consideriamo che risultato vogliamo alla fine perchè sarà questo return (e di base è lo stesso in ogni iterazione)
        })
        console.log("GRUPPO", gruppo);
    })
}