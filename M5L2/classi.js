/*
Le classi servono a descrivere la struttura di un oggetto e permettono di generare oggetti di quella tipologia
Questo ci permette di indicare le proprietà (variabili) e metodi (funzioni) degli oggetti generati

Attenzione! quando definiamo una classe stiamo creando un modello usando parametri e logiche generali
Per istanziare degli oggetti della classe da manipolare "eseguiremo" la classe con il comando
Un po' come con una funzione

let o = new nomeClasse(param1, param2)

Per creare una classe dobbiamo

1 - definire la classe
class NomeClasse {} 

2 - creare il metodo costruttore
questo metodo viene eseguito alla creazione degli oggetti
lo useremo per
    2.1 - indicare le PROPRIETÀ e i valori iniziali
    (possiamo chiedere dei parametri nel costruttore, li segnaleremo al momento dell'istanziamento della variabile con new)
    2.2 - altre esecuzioni iniziali

    constructor(par1, par2) {
        this.p1 = par1;
        this.p2 = par2;
        this.p3 = 10
        console.log("constructor eseguito")
    }

3 - definire i metodi
ovvero le funzionalità che gli oggetti della classe avranno innatamente
metodo(param1, param2) {
    //logica
    //eventuale return
}

Per istanziare una variabile della classe usiamo
let o = new NomeClasse(1, 2)

ora possiamo manipolare o
o.p1
o.p2 = 10

o.metodo()
let r = o.metodo() //se c'è return


Tutte le proprietà e metodi della classe saranno sempre usati su un'istanza della classe
(non possiamo fare metodo() ma o.metodo())
quindi quando scriviamo la classe possiamo riferirci alle proprietà e ai metodi dell'oggetto usando la keyword this
 */

class Prodotto {
    constructor(n, p) {
        this.nome = n
        this.price = p
        this.qnt = 10

        console.log("prodotto creato");
    }

    getPrezzoScontato() {
        if(this.qnt < 5) return this.price / 2
        return this.price
    }
}

let p = new Prodotto("prod1", 10)
let p1 = new Prodotto("prod2", 40)

let res1 = p.getPrezzoScontato()
let res2 = p1.getPrezzoScontato()

// let p = {
//     nome: "no",
//     price: 12,
//     qnt: 2,
//     getPrezzoScontato: ()=>{
//         if(this.qnt < 5) return this.price / 2
//         return this.price
//     }
// }
// p.getPrezzoScontato()


// let p1 = {
//     nome: "no",
//     price: 150,
//     qnt: 2,
//     getPrezzoScontato: ()=>{
//         if(this.qnt < 5) return this.price / 2
//         return this.price
//     }
// }


let arr = new Array()